import { useMemo, useState } from "react";
import CartItem from "../components/CartItem.tsx";
import Button from "../components/Button.tsx";
import Line from "../components/Line.tsx";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser.ts";
import { handleErrors } from "../utils";
import { decreaseProductQuantity, increaseProductQuantity, removeProductFromCart } from "../services/product.ts";
import { toast } from "react-toastify";

const Cart = () => {
    const [couponInput, setCouponInput] = useState<string>('');
    const [shippingFee, setShippingFee] = useState<number>(10);
    const {cart} = useUser();
    const navigate = useNavigate();

    const subtotal = useMemo(() => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [cart]);


    const handleRemove = async (id: string) => {
        try {
            await removeProductFromCart(id);
        } catch (error) {
            console.log(handleErrors(error))
        }
    };

    const handleIncrease = async (id: string) => {
        try {
            await increaseProductQuantity(id);
        } catch (error) {
            console.log(handleErrors(error))
        }
    };

    const handleDecrease = async (id: string) => {
        try {
            await decreaseProductQuantity(id);
        } catch (error) {
            console.log(handleErrors(error))
        }
    };

    const handleApplyCoupon = () => {
        if(couponInput === 'FREE') {
            if(shippingFee === 0) {
                toast('Coupon already applied', {type: 'info'});
            } else {
                setShippingFee(0);
                toast('Coupon applied successfully', {type: 'success'});
            }
        } else {
            toast('Invalid coupon', {type: 'error'});
        }
    }

    return (
        <div className={'mt-20 mb-[140px]'}>
            <div
                className={'grid grid-cols-[500px_1fr_1fr_70px] rounded px-10 py-6 bg-white shadow text-black font-medium text-base'}>
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
            <div className={'mt-20 flex items-start justify-between'}>
                <div>
                    <input value={couponInput} onChange={e => setCouponInput(e.target.value)} type={"text"}
                           placeholder={'Coupon Code'}
                           className={'outline-none text-base text-black font-normal px-6 py-4 w-[300px] border-black border rounded mr-4'}/>
                    <Button text={'Apply Coupon'} onClick={handleApplyCoupon}/>
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
                        <Button text={'Procees to checkout'}
                                onClick={() => navigate('/checkout', {state: {shippingFee}})}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;