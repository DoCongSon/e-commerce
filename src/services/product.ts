import { collection, deleteDoc, doc, getDoc, getDocs, limit, orderBy, query, setDoc, where } from "firebase/firestore";
import { auth, db } from "../firebase";

interface Product {
    id: string;
    name: string;
    description: string;
    category: string;
    discount: number;
    photo: string;
    isNew: boolean;
    images: string[];
    price: number;
    rate: 1 | 2 | 3 | 4 | 5;
    rateTotal: number;
}

const getAllProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products: Product[] = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        products.push(<Product>{...doc.data(), id: doc.id});
    });
    return products;
}

const getFlashSaleProducts = async () => {
    const q = query(collection(db, "products"), where("rateTotal", "<", 300), orderBy("rateTotal", "asc"));
    const querySnapshot = await getDocs(q);
    const products: Product[] = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        if(doc.data().isNew) {
            products.push(<Product>{...doc.data(), id: doc.id});
        }
    });
    return products;
}

const getBestSellerProducts = async () => {
    const q = query(collection(db, "products"), where("rateTotal", ">", 1500), orderBy("rateTotal", "desc"));
    const querySnapshot = await getDocs(q);
    const products: Product[] = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        products.push(<Product>{...doc.data(), id: doc.id});
    });
    return products;
}

const getProductsByCategoryName = async (category: string) => {
    const q = query(collection(db, "products"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const products: Product[] = [];
    querySnapshot.forEach((doc) => {
        products.push(<Product>{...doc.data(), id: doc.id});
    });
    return products;
}

// get products by category
const getProductsByCategory = async (category: string) => {
    switch (category) {
        case 'All products':
            return await getAllProducts();

        case 'Flash sale':
            return await getFlashSaleProducts();

        case 'Best selling products':
            return await getBestSellerProducts();
        case 'Just for you':
            return await getJustForYouProducts();
        default:
            if(category !== '') {
                return await getProductsByCategoryName(category);
            } else return [];

    }
}

const getProductById = async (id: string) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()) {
        return <Product>{...docSnap.data(), id: docSnap.id};
    } else {
        return null;
    }
}

const getRelatedProducts = async (id: string) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()) {
        const product = <Product>{...docSnap.data(), id: docSnap.id};
        const q = query(collection(db, "products"), where("category", "==", product.category), limit(5));
        const querySnapshot = await getDocs(q);
        const products: Product[] = [];
        querySnapshot.forEach((doc) => {
            if(doc.id !== id && products.length < 4) {
                products.push(<Product>{...doc.data(), id: doc.id});
            }
        });
        return products;
    } else {
        return null;
    }
}

const getJustForYouProducts = async () => {
    const q = query(collection(db, "products"), where("rateTotal", ">", 1500), orderBy("rateTotal", "desc"));
    const querySnapshot = await getDocs(q);
    const products: Product[] = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        products.push(<Product>{...doc.data(), id: doc.id});
    });
    return products;

}

const addProductToCart = async (cartItem: Pick<Product, 'id' | "name" | 'photo' | 'price' | 'discount'>) => {
    if(auth.currentUser) {
        await setDoc(doc(db, `users/${auth.currentUser?.uid}/cart`, cartItem.id), {
            name: cartItem.name,
            photo: cartItem.photo,
            price: cartItem.price * (1 - cartItem.discount / 100),
            quantity: 1
        });
    }
}

const addProductToFavorite = async (cartItem: Product) => {
    if(auth.currentUser) {
        await setDoc(doc(db, `users/${auth.currentUser?.uid}/favorite`, cartItem.id), {
            name: cartItem.name,
            photo: cartItem.photo,
            price: cartItem.price,
            rate: cartItem.rate,
            rateTotal: cartItem.rateTotal,
            discount: cartItem.discount,
            isNew: cartItem.isNew,
            images: cartItem.images,
            description: cartItem.description,
            category: cartItem.category
        });
    }
}

const removeProductFromCart = async (id: string) => {
    if(auth.currentUser) {
        await deleteDoc(doc(db, `users/${auth.currentUser?.uid}/cart`, id));
    }
}

const removeProductFromFavorite = async (id: string) => {
    if(auth.currentUser) {
        await deleteDoc(doc(db, `users/${auth.currentUser?.uid}/favorite`, id));
    }
}

const increaseProductQuantity = async (id: string) => {
    if(auth.currentUser) {
        const docRef = doc(db, `users/${auth.currentUser?.uid}/cart`, id);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
            await setDoc(docRef, {quantity: docSnap.data().quantity + 1}, {merge: true});
        }
    }
}

const decreaseProductQuantity = async (id: string) => {
    if(auth.currentUser) {
        const docRef = doc(db, `users/${auth.currentUser?.uid}/cart`, id);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
            if(docSnap.data().quantity > 1) {
                await setDoc(docRef, {quantity: docSnap.data().quantity - 1}, {merge: true});
            }
        }
    }
}

export {
    increaseProductQuantity,
    decreaseProductQuantity,
    getProductsByCategory,
    addProductToCart,
    addProductToFavorite,
    getProductById,
    getRelatedProducts,
    removeProductFromFavorite,
    removeProductFromCart
};
export type { Product };
