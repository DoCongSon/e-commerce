import { useEffect, useMemo, useState } from "react";
import CartItem, { CartItemProps } from "../components/CartItem.tsx";
import { productsList } from "../FakeData/products.ts";
import Button from "../components/Button.tsx";
import Line from "../components/Line.tsx";
import { useNavigate } from "react-router-dom";

type CartListType = Pick<CartItemProps, 'id' | "price" | 'image' | 'quantity' | 'name'>;

const Cart = () => {
    const [cart, setCart] = useState<CartListType[]>([])
    const [couponInput, setCouponInput] = useState<string>('');
    const [shippingFee, setShippingFee] = useState<number>(0);

    const navigate = useNavigate();

    const subtotal = useMemo(() => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [cart]);

    useEffect(() => {
        setCart(productsList.slice(0, 3).map((product) => ({
            id: product.id,
            price: product.price,
            name: product.name,
            quantity: 1,
            image: product.photo
        })));
        setShippingFee(10);
    }, []);

    const handleRemove = (id: number) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const handleIncrease = (id: number) => {
        console.log(id)
        setCart(cart.map((item) => {
            if(item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            }
            return item;
        }));
    };

    const handleDecrease = (id: number) => {
        setCart(cart.map((item) => {
            if(item.id === id && item.quantity > 1) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                };
            }
            return item;
        }));
    };

    return (
        <div className={'mt-20 mb-[140px]'}>
            <div
                className={'grid grid-cols-[500px_1fr_1fr_70px] rounded px-10 py-6 bg-white shadow text-black font-normal text-base'}>
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
            </div>
            <div className={'mt-10 flex flex-col gap-10'}>
                {
                    cart.map((item) => (
                        <CartItem {...item} key={item.id} onCartRemove={id => handleRemove(id)}
                                  onIncrease={id => handleIncrease(id)} onDecrease={id => handleDecrease(id)}/>
                    ))
                }
            </div>
            <div className={'mt-6 flex items-center justify-between'}>
                <Button type={'secondary'} text={'Return To Shop'}
                        onClick={() => console.log('Return to shop')}/>
                <Button type={'secondary'} text={'Update Cart'}
                        onClick={() => console.log('Update Cart')}/>
            </div>

            <div className={'mt-20 flex items-start justify-between'}>
                <div>
                    <input value={couponInput} onChange={e => setCouponInput(e.target.value)} type={"text"}
                           placeholder={'Coupon Code'}
                           className={'outline-none text-base text-black font-normal px-6 py-4 w-[300px] border-black border rounded mr-4'}/>
                    <Button text={'Apply Coupon'} onClick={() => {
                    }}/>
                </div>
                <div className={'w-[470px] py-8 px-6 rounded border-black border-2'}>
                    <p className={'text-xl font-medium text-black'}>Cart Total</p>
                    <div className={'flex items-center justify-between my-4 mt-6'}>
                        <p className={'text-base font-normal text-black'}>Subtotal:</p>
                        <p className={'text-base font-normal text-black'}>${subtotal}</p>
                    </div>
                    <Line/>
                    <div className={'flex items-center justify-between my-4'}>
                        <p className={'text-base font-normal text-black'}>Shipping:</p>
                        <p className={'text-base font-normal text-black'}>${shippingFee}</p>
                    </div>
                    <Line/>
                    <div className={'flex items-center justify-between my-4'}>
                        <p className={'text-base font-normal text-black'}>Total:</p>
                        <p className={'text-base font-normal text-black'}>${subtotal + shippingFee}</p>
                    </div>
                    <div className={'mt-2 flex items-center justify-center'}>
                        <Button text={'Procees to checkout'} onClick={() => navigate('/checkout')}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;