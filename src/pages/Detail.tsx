import { productDetail, productsList } from "../FakeData/products.ts";
import { useEffect, useState } from "react";
import Rate from "../components/Rate.tsx";
import Line from "../components/Line.tsx";
import { Minus, Plus } from "lucide-react";
import Button from "../components/Button.tsx";
import DeliveryImg from "../assets/icon-delivery-black.svg";
import ReturnImg from "../assets/Icon-return.svg";
import ProductItem, { ProductItemProps } from "../components/ProductItem.tsx";

interface ProductDetail {
    id: number,
    name: string,
    price: number,
    discount?: number,
    rate: 1 | 2 | 3 | 4 | 5,
    rateTotal: number,
    isNew: boolean,
    photo: string[],
    description: string
}

type ProductSize = 'XS' | 'S' | 'M' | 'L' | 'XL'

const sizes: ProductSize[] = ['XS', 'S', 'M', 'L', 'XL'];

const PickSize = (props: { active: ProductSize, onChange: (size: ProductSize) => void }) => {
    return (
        <div className={'flex gap-6 items-center'}>
            <p className={'text-black text-xl leading-none font-normal'}>Size: </p>
            <div className={'flex gap-4'}>
                {
                    sizes.map((size, index) => {
                        if(size === props.active) {
                            return (
                                <div key={index}
                                     onClick={() => props.onChange(size)}
                                     className={'cursor-pointer select-none w-8 h-8 flex items-center justify-center rounded bg-buttons'}>
                                    <p className={'text-zinc-50 text-sm leading-none font-medium'}>{size}</p>
                                </div>
                            )
                        } else {
                            return (
                                <div key={index}
                                     onClick={() => props.onChange(size)}
                                     className={'cursor-pointer select-none w-8 h-8 flex items-center justify-center rounded border border-black/50'}>
                                    <p className={'text-black text-sm leading-none font-medium'}>{size}</p>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

const Detail = () => {
    const [product, setProduct] = useState<ProductDetail | null>(null);
    const [imageDisplay, setImageDisplay] = useState<string>(productDetail.photo[0]);
    const [size, setSize] = useState<ProductSize>('S');
    const [quantity, setQuantity] = useState(1);
    const [relatedList, setRelatedList] = useState<ProductItemProps[]>([]);


    useEffect(() => {
        setProduct(productDetail);
        setRelatedList(productsList.slice(0, 4));
    }, []);

    if(!product) return null;
    return (
        <div className={'mt-20 mb-[140px]'}>
            <div className={'flex items-start justify-between'}>
                <div className={'flex gap-[30px]'}>
                    <div className={'flex flex-col gap-4'}>
                        {
                            product.photo?.map((photo, index) => {
                                return (
                                    <div
                                        onClick={() => setImageDisplay(photo)}
                                        className={'cursor-pointer w-[170px] bg-[#F5F5F5] p-3 h-[138px] rounded'}
                                        key={index}>
                                        <img className={'w-full h-full object-contain'} src={photo}/>
                                    </div>
                                )
                            })

                        }
                    </div>
                    <div className={'w-[500px] h-[600px] bg-[#F5F5F5] p-6 rounded'}>
                        <img className={'w-full h-full object-contain'} src={imageDisplay}/>
                    </div>
                </div>
                <div className={'w-[400px]'}>
                    <h1 className={'text-2xl leading-none font-semibold tracking-[0.72px] text-black font-primary'}>{product.name}</h1>
                    <div className={'flex items-center gap-4 mt-4'}>
                        <Rate rate={product.rate} total={product.rateTotal}/>
                        {
                            product.isNew &&
                          <div className={'py-1 px-2 rounded bg-[#00FF66]'}>
                            <p className={'text-xs leading-normal font-normal text-zinc-50'}>NEW</p>
                          </div>
                        }
                    </div>
                    <div className={'mt-4'}>
                        {product.discount &&
                          <div className={'flex gap-3'}>
                            <p
                              className={'text-2xl leading-none font-semibold tracking-[0.72px] font-primary text-buttons'}>${product.price - product.price * product.discount / 100}</p>
                            <p
                              className={'text-2xl leading-none font-semibold tracking-[0.72px] text-black font-primary opacity-50 line-through'}>${product.price}</p>
                          </div>
                        }
                        {
                            !product.discount &&
                          <p
                            className={'text-2xl leading-none font-semibold tracking-[0.72px] font-primary text-buttons'}>${product.price}</p>
                        }
                    </div>
                    <p className={'my-6 text-sm text-balance font-normal text-black'}>{product.description}</p>
                    <Line/>
                    <div className={'mt-6'}>
                        <PickSize active={size} onChange={value => setSize(value)}/>
                    </div>
                    <div className={'flex gap-4 mt-6'}>
                        <div className={'flex select-none'}>
                            <div onClick={() => {
                                if(quantity > 1) setQuantity(quantity - 1)
                            }} className={'px-2 py-2.5 border border-black/50 rounded-l'}>
                                <Minus size={24} color={'black'}/>
                            </div>
                            <div className={'w-20 border-y border-black/50 flex items-center justify-center'}>
                                <p className={'font-medium text-xl text-black'}>{quantity}</p>
                            </div>
                            <div onClick={() => setQuantity(quantity + 1)}
                                 className={'px-2 py-2.5 rounded-r bg-buttons'}>
                                <Plus size={24} color={'white'}/>
                            </div>
                        </div>
                        <Button text={'Buy Now'} size={"small"} onClick={() => {
                        }}/>
                    </div>
                    <div className={'flex flex-col gap-4 py-6 rounded border border-black/50 mt-10'}>
                        <div className={'ml-4 flex gap-4 items-center'}>
                            <div className={'w-10 h-10'}>
                                <img className={'w-full h-full object-cover'} src={DeliveryImg} alt=""/>
                            </div>
                            <div>
                                <p className={'font-medium text-base text-black'}>Free Delivery</p>
                                <p className={'mt-2 font-medium text-xs leading-normal underline text-black'}>Enter your
                                    postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <Line/>
                        <div className={'ml-4 flex gap-4 items-center'}>
                            <div className={'w-10 h-10'}>
                                <img className={'w-full h-full object-cover'} src={ReturnImg} alt=""/>
                            </div>
                            <div>
                                <p className={'font-medium text-base text-black'}>Return Delivery</p>
                                <p className={'mt-2 font-medium text-xs leading-normal text-black'}>Free 30
                                    Days Delivery Returns. <span className={'underline'}>Details</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'mt-[140px]'}>
                <div className={'flex items-center gap-4'}>
                    <div className={'w-5 h-10 rounded bg-buttons'}/>
                    <p className={'text-xl leading-[26px] text-black'}>Related Item</p>
                </div>
                <div className={'flex gap-x-[30px] flex-wrap gap-y-[60px] mt-[60px]'}>
                    {
                        relatedList.map((item, index) => {
                            return <ProductItem key={index} {...item} iconButton={{
                                view: true, onView: () => {
                                }
                            }}/>;
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Detail;