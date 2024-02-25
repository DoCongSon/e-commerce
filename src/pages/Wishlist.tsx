import Button from "../components/Button.tsx";
import { useEffect, useState } from "react";
import ProductItem, { ProductItemProps } from "../components/ProductItem.tsx";
import { productsList } from "../FakeData/products.ts";

const Wishlist = () => {
    const [favoriteList, setFavoriteList] = useState<ProductItemProps[]>([])
    const [justForYouList, setJustForYouList] = useState<ProductItemProps[]>([])

    useEffect(() => {
        setFavoriteList(productsList.slice(0, 6));
        setJustForYouList(productsList.slice(0, 6));
    }, []);

    return (
        <div className={'mt-20'}>
            <div className={'flex items-center justify-between'}>
                <p className={'text-xl leading-[26px] text-black'}>{`Wishlist (${favoriteList.length})`}</p>
                <Button text={'Move All To Bag'} type={"secondary"} onClick={() => {
                }}/>
            </div>
            <div className={'flex gap-x-[30px] flex-wrap gap-y-[60px] mt-[60px]'}>
                {
                    favoriteList.map((item, index) => {
                        return <ProductItem key={index} {...item} iconButton={{
                            delete: true, onDelete: () => {
                            }
                        }}/>;
                    })
                }
            </div>
            <div className={'mt-20 flex items-center justify-between'}>
                <div className={'flex items-center gap-4'}>
                    <div className={'w-5 h-10 rounded bg-buttons'}/>
                    <p className={'text-xl leading-[26px] text-black'}>Just For You</p>
                </div>
                <Button text={'See All'} type={"secondary"} onClick={() => {
                }}/>
            </div>
            <div className={'flex gap-x-[30px] flex-wrap gap-y-[60px] mt-[60px]'}>
                {
                    justForYouList.map((item, index) => {
                        return <ProductItem key={index} {...item} iconButton={{
                            view: true, onView: () => {
                            }
                        }}/>;
                    })
                }
            </div>
        </div>
    );
};

export default Wishlist;