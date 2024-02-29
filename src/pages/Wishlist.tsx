import Button from "../components/Button.tsx";
import { useEffect, useState } from "react";
import ProductItem, { ProductItemProps } from "../components/ProductItem.tsx";
import useUser from "../hooks/useUser.ts";
import { addProductToCart, getProductsByCategory, removeProductFromFavorite } from "../services/product.ts";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { handleErrors } from "../utils";

const Wishlist = () => {
    const [favoriteList, setFavoriteList] = useState<ProductItemProps[]>([])
    const [justForYouList, setJustForYouList] = useState<ProductItemProps[]>([])
    const {favoriteProducts} = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        setFavoriteList(favoriteProducts);
    }, [favoriteProducts]);

    useEffect(() => {
        (async () => {
            const justForYou = await getProductsByCategory('Just for you');
            setJustForYouList(justForYou.slice(0, 4));
        })()
    }, []);

    const handleMoveAllToCart = async () => {
        if(favoriteList.length === 0) return;
        try {
            await Promise.all(favoriteList.map(item => addProductToCart(item)));
            await Promise.all(favoriteList.map(item => removeProductFromFavorite(item.id)));
            toast('Moved all to cart', {type: 'success'});
            navigate('/cart');
        } catch (error) {
            console.log(handleErrors(error));
        }
    }

    return (
        <div className={'mt-20 mb-[140px]'}>
            <div className={'flex items-center justify-between'}>
                <p className={'text-xl leading-[26px] text-black'}>{`Wishlist (${favoriteList.length})`}</p>
                <Button text={'Move All To Cart'} type={"secondary"} onClick={handleMoveAllToCart}/>
            </div>
            <div className={'flex gap-x-[30px] flex-wrap gap-y-[60px] mt-[60px]'}>
                {
                    favoriteList.map((item, index) => {
                        return <ProductItem key={index} {...item} iconButton={{delete: true}}/>;
                    })
                }
            </div>
            <div className={'mt-20 flex items-center justify-between'}>
                <div className={'flex items-center gap-4'}>
                    <div className={'w-5 h-10 rounded bg-buttons'}/>
                    <p className={'text-xl leading-[26px] text-black'}>Just For You</p>
                </div>
                <Button text={'See All'} type={"secondary"}
                        onClick={() => navigate({pathname: '/products', search: `?category=Just for you&page=1`})}/>
            </div>
            <div className={'flex gap-x-[30px] flex-wrap gap-y-[60px] mt-[60px]'}>
                {
                    justForYouList.map((item, index) => {
                        return <ProductItem key={index} {...item}/>;
                    })
                }
            </div>
        </div>
    );
};

export default Wishlist;