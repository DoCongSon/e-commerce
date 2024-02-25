import { Eye, Heart, Trash2 } from "lucide-react";
import Rate from "./Rate.tsx";
import { useEffect, useRef, useState } from "react";

interface ProductItemProps {
    id: number;
    photo: string;
    name: string;
    price: number;
    rate: 1 | 2 | 3 | 4 | 5;
    rateTotal: number;
    discount?: number;
    isNew?: boolean;
    color?: { code: string, photo: string }[];
    iconButton?: {
        favorite?: boolean;
        onFavorite?: () => void;
        delete?: boolean;
        onDelete?: () => void;
        view?: boolean;
        onView?: () => void;
    };
}

const ProductItem = (props: ProductItemProps) => {
    const [isShowAddToCart, setIsShowAddToCart] = useState(false);
    const emlement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        emlement.current?.addEventListener("mouseenter", () => {
                setIsShowAddToCart(true);
            }
        );
        emlement.current?.addEventListener("mouseleave", () => {
                setIsShowAddToCart(false);
            }
        );
    }, []);

    return (
        <div className={'w-[270px] transition-all select-none'}>
            <div ref={emlement} className={'h-[250px] bg-[#F5F5F5] relative py-[35px] px-10 rounded'}>
                <img className={'w-full object-contain'} src={props.photo} alt=""/>
                {
                    props.isNew &&
                  <div className={'absolute top-3 left-3 px-3 py-1 rounded bg-[#00FF66]'}>
                    <p className={'text-xs leading-normal font-normal text-zinc-50'}>NEW</p>
                  </div>
                }
                <div className={'absolute top-3 right-3 flex flex-col gap-2'}>
                    {
                        props.iconButton?.favorite && <Heart onClick={props.iconButton.onFavorite}
                                                             className={'p-2 bg-white rounded-full hover:text-buttons cursor-pointer'}
                                                             size={34}/>
                    }
                    {
                        props.iconButton?.delete && <Trash2 onClick={props.iconButton.onDelete}
                                                            className={'p-2 bg-white rounded-full hover:text-buttons cursor-pointer'}
                                                            size={34}/>
                    }
                    {
                        props.iconButton?.view && <Eye onClick={props.iconButton.onView}
                                                       className={'p-2 bg-white rounded-full hover:text-buttons cursor-pointer'}
                                                       size={34}/>
                    }
                </div>
                {
                    isShowAddToCart &&
                  <div className={'absolute bottom-0 left-0 right-0 h-10 flex items-center justify-center bg-black'}>
                    <p className={'text-base font-medium text-white'}>Add To Cart</p>
                  </div>
                }
            </div>
            <div className={'mt-4 flex flex-col gap-2'}>
                <p className={'text-base font-medium text-black'}>{props.name}</p>
                {props.discount &&
                  <div className={'flex gap-3'}>
                    <p
                      className={'text-base font-medium text-buttons'}>${props.price - props.price * props.discount / 100}</p>
                    <p className={'text-base font-medium text-black opacity-50 line-through'}>${props.price}</p>
                  </div>
                }
                {
                    !props.discount &&
                  <p className={'text-base font-medium text-buttons'}>${props.price}</p>
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