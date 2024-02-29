import { Heart, Trash2 } from "lucide-react";
import Rate from "./Rate.tsx";
import { useEffect, useRef, useState } from "react";
import useUser from "../hooks/useUser.ts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { addProductToCart, addProductToFavorite, removeProductFromFavorite } from "../services/product.ts";
import { handleErrors } from "../utils";

interface ProductItemProps {
    id: string;
    photo: string;
    name: string;
    category: string;
    images: string[];
    description: string;
    price: number;
    rate: 1 | 2 | 3 | 4 | 5;
    rateTotal: number;
    discount: number;
    isNew: boolean;
    iconButton?: {
        favorite?: boolean;
        delete?: boolean;
    };
    isFavorite?: boolean;
}

const ProductItem = (props: ProductItemProps) => {
    const [isShowAddToCart, setIsShowAddToCart] = useState(false);
    const [isAvailableInCart, setIsAvailableInCart] = useState(false);
    const element = useRef<HTMLDivElement>(null);
    const {user, cart} = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        element.current?.addEventListener("mouseenter", () => {
                setIsShowAddToCart(true);
            }
        );
        element.current?.addEventListener("mouseleave", () => {
                setIsShowAddToCart(false);
            }
        );
    }, []);

    useEffect(() => {
        if(user) {
            setIsAvailableInCart(cart.some(item => item.id === props.id));
        }
    }, [cart, props.id, user]);

    const handleAddToCart = async (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if(user) {
            if(isAvailableInCart) {
                toast('Product already in cart', {type: 'info', toastId: 1});
            } else {
                try {
                    await addProductToCart(props);
                    toast('Added to cart', {type: 'success'})
                } catch (e) {
                    console.log(handleErrors(e));
                }
            }
        } else {
            toast('Please log in before adding products to cart', {type: 'info', toastId: 1});
        }
    };

    const handleClick = () => {
        navigate(`/detail/${props.id}`);
    };

    const handleFavorite = async (e: React.MouseEvent<SVGElement>) => {
        e.stopPropagation();
        console.log('favorite')
        if(user) {
            if(props.isFavorite) {
                toast('Product already in favorite', {type: 'info', toastId: 'favorite1'});
            } else {
                try {
                    await addProductToFavorite(props);
                    toast('Added to favorite', {type: 'success'})
                } catch (e) {
                    console.log(handleErrors(e));
                }
            }
        } else {
            toast('Please log in before adding products to favorite', {type: 'info', toastId: 2});
        }
    };

    const handleDelete = async (e: React.MouseEvent<SVGElement>) => {
        e.stopPropagation();
        console.log('delete')
        if(user) {
            await removeProductFromFavorite(props.id);
        }
    };


    return (
        <div onClick={handleClick} className={'w-[270px] transition-all cursor-pointer'}>
            <div ref={element} className={'h-[250px] bg-[#F5F5F5] relative py-[35px] px-10 rounded'}>
                <img className={'select-none w-full h-full object-contain'} src={props.photo} alt=""/>
                {
                    props.isNew &&
                  <div className={'absolute top-3 left-3 px-3 py-1 rounded bg-[#00FF66]'}>
                    <p className={'text-xs leading-normal font-normal text-zinc-50'}>NEW</p>
                  </div>
                }
                <div className={'absolute top-3 right-3 flex flex-col gap-2'}>
                    {
                        props.iconButton?.favorite && <Heart onClick={handleFavorite}
                                                             className={'p-2 rounded-full cursor-pointer transition-all' + (props.isFavorite ? ' text-white bg-buttons' : ' bg-white hover:text-buttons')}
                                                             size={34}/>
                    }
                    {
                        props.iconButton?.delete && <Trash2 onClick={handleDelete}
                                                            className={'p-2 bg-white rounded-full hover:text-buttons cursor-pointer'}
                                                            size={34}/>
                    }
                </div>
                {
                    isShowAddToCart &&
                  <div onClick={handleAddToCart}
                       className={'absolute bottom-0 left-0 right-0 h-10 flex items-center justify-center bg-black'}>
                    <p className={'text-base font-medium text-white'}>Add To Cart</p>
                  </div>
                }
            </div>
            <div className={'mt-4 flex flex-col gap-2'}>
                <p className={'text-base font-medium text-black truncate'}>{props.name}</p>
                {props.discount &&
                  <div className={'flex gap-3'}>
                    <p
                      className={'text-base font-medium text-buttons'}>${(props.price - props.price * props.discount / 100).toFixed(2)}</p>
                    <p
                      className={'text-base font-medium text-black opacity-50 line-through'}>${props.price.toFixed(2)}</p>
                  </div>
                }
                {
                    !props.discount &&
                  <p className={'text-base font-medium text-buttons'}>${props.price.toFixed(2)}</p>
                }
                <div>
                    <Rate rate={props.rate} total={props.rateTotal}/>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
export type { ProductItemProps };