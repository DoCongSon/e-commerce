import CheckBoxInput from "../components/CheckBoxInput.tsx";
import { useEffect, useMemo, useState } from "react";
import { CartItemProps } from "../components/CartItem.tsx";
import Line from "../components/Line.tsx";
import RadioInput from "../components/RadioInput.tsx";
import Banks from "../assets/banks.png";
import Button from "../components/Button.tsx";
import useUser from "../hooks/useUser.ts";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { updateAddressBook } from "../services/user.ts";

type CheckoutType = Pick<CartItemProps, 'id' | "price" | 'photo' | 'quantity' | 'name'>;

const CheckoutItem = (props: CheckoutType) => {
    return (
        <div className={'flex items-center justify-between'}>
            <div className={'flex items-center gap-5'}>
                <div className={'w-14 h-14 flex items-center'}>
                    <img className={'w-full h-full object-contain'} src={props.photo} alt={props.name}/>
                </div>
                <p className={'w-[200px]'}>{props.name}</p>
                <p className={''}>(x{props.quantity})</p>
            </div>
            <p>${props.price.toFixed(2)}</p>
        </div>
    )
}

const Checkout = () => {
    const [checkoutItems, setCheckoutItems] = useState<CheckoutType[]>([]);
    const [nameInput, setNameInput] = useState<string>('');
    const [companyInput, setCompanyInput] = useState<string>('');
    const [streetInput, setStreetInput] = useState<string>('');
    const [apartmentInput, setApartmentInput] = useState<string>('');
    const [cityInput, setCityInput] = useState<string>('');
    const [phoneInput, setPhoneInput] = useState<string>('');
    const [emailInput, setEmailInput] = useState<string>('');
    const [saveInfoInput, setSaveInfoInput] = useState<boolean>(false);
    const [bankInput, setBankInput] = useState<boolean>(true);
    const [couponInput, setCouponInput] = useState<string>('');
    const [shippingFee, setShippingFee] = useState<number>(10);
    const {addressBook, user, cart} = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(location.state.shippingFee !== undefined) {
            setShippingFee(location.state.shippingFee);
        }
    }, [location]);

    useEffect(() => {
        if(location.state.product) {
            setCheckoutItems([location.state.product]);
            console.log(location.state.product);
        } else {
            setCheckoutItems(cart);
        }
    }, [cart, location.state.product]);

    const subtotal = useMemo(() => {
        return checkoutItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [checkoutItems]);

    useEffect(() => {
        if(user) {
            setNameInput(user.displayName || '');
            setEmailInput(user.email || '');
        }
        if(addressBook) {
            setCompanyInput(addressBook.companyName);
            setStreetInput(addressBook.address);
            setApartmentInput(addressBook.apartment);
            setCityInput(addressBook.city);
            setPhoneInput(addressBook.phone);
        }
    }, [addressBook, user]);

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

    const handlePlaceOrder = async () => {
        if(saveInfoInput && user) {
            await updateAddressBook(user?.uid || '', {
                address: streetInput,
                apartment: apartmentInput,
                city: cityInput,
                companyName: companyInput,
                phone: phoneInput
            });
        }

        console.log({
            name: nameInput,
            email: emailInput,
            addressBook: {
                companyName: companyInput,
                address: streetInput,
                apartment: apartmentInput,
                phone: phoneInput,
                city: cityInput
            },
            checkoutItems,
            paymentMethod: bankInput ? 'Bank' : 'Cash on delivery',
            total: subtotal + shippingFee
        })
        navigate('/');
        toast('Order placed successfully', {type: 'success'});
    }

    return (
        <div className={'mt-20 mb-[140px]'}>
            <h1 className={'font-primary text-4xl leading-[30px] text-black font-medium tracking-[1.44px]'}>Billing
                Details</h1>
            <div className={'flex justify-between'}>
                <div>
                    <div className={'mt-12'}>
                        <p className={'text-black text-base font-medium'}>
                            Name<span className={'text-buttons'}>*</span>
                        </p>
                        <input disabled={true} value={nameInput} onChange={e => setNameInput(e.target.value)}
                               type="text"
                               className={'mt-2 w-[470px] h-[50px] rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                    </div>
                    <div className={'mt-8'}>
                        <p className={'text-black text-base font-medium'}>
                            Company Name
                        </p>
                        <input value={companyInput} onChange={e => setCompanyInput(e.target.value)} type="text"
                               className={'mt-2 w-[470px] h-[50px] rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                    </div>
                    <div className={'mt-8'}>
                        <p className={'text-black text-base font-medium'}>
                            Street Address<span className={'text-buttons'}>*</span>
                        </p>
                        <input value={streetInput} onChange={e => setStreetInput(e.target.value)} type="text"
                               className={'mt-2 w-[470px] h-[50px] rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                    </div>
                    <div className={'mt-8'}>
                        <p className={'text-black text-base font-medium'}>
                            Apartment, floor, etc. (optional)
                        </p>
                        <input value={apartmentInput} onChange={e => setApartmentInput(e.target.value)} type="text"
                               className={'mt-2 w-[470px] h-[50px] rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                    </div>
                    <div className={'mt-8'}>
                        <p className={'text-black text-base font-medium'}>
                            Town/City<span className={'text-buttons'}>*</span>
                        </p>
                        <input value={cityInput} onChange={e => setCityInput(e.target.value)} type="text"
                               className={'mt-2 w-[470px] h-[50px] rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                    </div>
                    <div className={'mt-8'}>
                        <p className={'text-black text-base font-medium'}>
                            Phone Number<span className={'text-buttons'}>*</span>
                        </p>
                        <input value={phoneInput} onChange={e => setPhoneInput(e.target.value)} type="tel"
                               className={'mt-2 w-[470px] h-[50px] rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                    </div>
                    <div className={'mt-8'}>
                        <p className={'text-black text-base font-medium'}>
                            Email Address<span className={'text-buttons'}>*</span>
                        </p>
                        <input disabled={true} value={emailInput} onChange={e => setEmailInput(e.target.value)}
                               type="email"
                               className={'mt-2 w-[470px] h-[50px] rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                    </div>
                    <div className={'mt-6'}>
                        <CheckBoxInput value={saveInfoInput} onClick={() => setSaveInfoInput(!saveInfoInput)}
                                       label={'Save this information for faster check-out next time'}/>
                    </div>
                </div>
                <div className={'mt-20'}>
                    <div className={'w-[425px] flex flex-col gap-8'}>
                        {
                            checkoutItems.map((item, index) => (
                                <CheckoutItem {...item} key={index}/>
                            ))
                        }
                    </div>
                    <div className={'w-[425px] mt-8'}>
                        <div className={'flex items-center justify-between my-4'}>
                            <p className={'text-base font-normal text-black'}>Subtotal:</p>
                            <p className={'text-base font-normal text-black'}>${subtotal.toFixed(2)}</p>
                        </div>
                        <Line/>
                        <div className={'flex items-center justify-between my-4'}>
                            <p className={'text-base font-normal text-black'}>Shipping:</p>
                            <p className={'text-base font-normal text-black'}>${shippingFee.toFixed(2)}</p>
                        </div>
                        <Line/>
                        <div className={'flex items-center justify-between my-4'}>
                            <p className={'text-base font-normal text-black'}>Total:</p>
                            <p className={'text-base font-normal text-black'}>${(subtotal + shippingFee).toFixed(2)}</p>
                        </div>
                    </div>
                    <div className={'w-[425px] mt-8'}>
                        <div className={'flex items-center justify-between'}>
                            <RadioInput value={bankInput} onClick={() => setBankInput(true)} label={'Bank'}/>
                            <div>
                                <img src={Banks} alt=""/>
                            </div>
                        </div>
                        <div className={'mt-8'}>
                            <RadioInput value={!bankInput} onClick={() => setBankInput(false)}
                                        label={'Cash on delivery'}/>
                        </div>
                    </div>
                    <div className={'mt-8'}>
                        <input value={couponInput} onChange={e => setCouponInput(e.target.value)} type={"text"}
                               placeholder={'Coupon Code'}
                               className={'outline-none text-base text-black font-normal px-6 py-4 w-[300px] border-black border rounded mr-4'}/>
                        <Button text={'Apply Coupon'} onClick={handleApplyCoupon}/>
                    </div>
                    <Button style={'mt-8'} text={'Place Order'} onClick={handlePlaceOrder}/>
                </div>
            </div>
        </div>
    );
};

export default Checkout;