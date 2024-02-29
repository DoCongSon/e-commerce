import { useEffect, useState } from "react";
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth, db } from "../firebase";
import { Product } from "../services/product.ts";

type AddressBookType = {
    companyName: string,
    address: string,
    apartment: string,
    phone: string,
    city: string
};

type CartType = Pick<Product, 'id' | "name" | 'photo' | 'price'> & { quantity: number };

const useUser = () => {
    const [user, setUser] = useState<User | null>(null);
    const [addressBook, setAddressBook] = useState<AddressBookType | null>(null);
    const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<CartType[]>([]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, []);

    useEffect(() => {
        if(!user) return;
        const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
            setAddressBook(doc.data() as AddressBookType);
        });
        return () => unsub();
    }, [user]);

    useEffect(() => {
        if(!user) return;
        const q = query(collection(db, `users/${user.uid}/favorite`));
        const unsub = onSnapshot(q, (querySnapshot) => {
            const products: Product[] = [];
            querySnapshot.forEach((doc) => {
                products.push({...doc.data(), id: doc.id} as Product);
            });
            setFavoriteProducts(products);
        });
        return () => unsub();
    }, [user]);

    useEffect(() => {
        if(!user) return;
        const q = query(collection(db, `users/${user.uid}/cart`));
        const unsub = onSnapshot(q, (querySnapshot) => {
            const products: CartType[] = [];
            querySnapshot.forEach((doc) => {
                products.push({...doc.data(), id: doc.id} as CartType);
            });
            setCart(products);
        });
        return () => unsub();
    }, [user]);

    return {user, addressBook, favoriteProducts, cart};
}

export default useUser;