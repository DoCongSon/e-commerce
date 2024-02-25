import CheckBoxInput from "../components/CheckBoxInput.tsx";
import { useEffect, useState } from "react";
import { productsList } from "../FakeData/products.ts";
import { CartItemProps } from "../components/CartItem.tsx";
import Line from "../components/Line.tsx";
import RadioInput from "../components/RadioInput.tsx";
import Banks from "../assets/banks.png";
import Button from "../components/Button.tsx";

type CheckoutType = Pick<CartItemProps, 'id' | "price" | 'image' | 'quantity' | 'name'>;

const CheckoutItem = (props: CheckoutType) => {
    return (
        <div className={'flex items-center justify-between'}>
            <div className={'flex items-center gap-5'}>
                <div className={'w-14 h-14 flex items-center'}>
                    <img className={'w-full object-cover'} src={props.image} alt={props.name}/>
                </div>
                <p>{`${props.name} (x${props.quantity})`}</p>
            </div>
            <p>${props.price}</p>
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
    useEffect(() => {
        setCheckoutItems(productsList.slice(0, 3).map((product) => ({
            id: product.id,
            price: product.price,
            name: product.name,
            quantity: 1,
            image: product.photo
        })));
    }, []);

    return (
        <div className={'mt-20 mb-[140px]'}>
            <h1 className={'font-primary text-4xl leading-[30px] text-black font-medium tracking-[1.44px]'}>Billing
                Details</h1>
            <div className={'flex justify-between'}>
                <div>
                    <div className={'mt-12'}>
                        <p className={'text-black text-base font-normal'}>
                            First Name<span className={'text-buttons'}>*</span>
                        </p>
                        <input value={nameInput} onChange={e => setNameInput(e.target.value)} type="text"
                               className={'mt-2 w-[470px] h-[50px] rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                    </div>
                    <div className={'mt-8'}>
                        <p className={'text-black text-base font-normal'}>
                            Company Name
                        </p>
                        <input value={companyInput} onChange={e => setCompanyInput(e.target.value)} type="text"
                               className={'mt-2 w-[470px] h-[50px] rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                    </div>
                    <div className={'mt-8'}>
                        <p className={'text-black text-base font-normal'}>
                            Street Address<span className={'text-buttons'}>*</span>
                        </p>
                        <input value={streetInput} onChange={e => setStreetInput(e.target.value)} type="text"
                               className={'mt-2 w-[470px] h-[50px] rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                    </div>
                    <div className={'mt-8'}>
                        <p className={'text-black text-base font-normal'}>
                            Apartment, floor, etc. (optional)
                        </p>
                        <input value={apartmentInput} onChange={e => setApartmentInput(e.target.value)} type="text"
                               className={'mt-2 w-[470px] h-[50px] rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                    </div>
                    <div className={'mt-8'}>
                        <p className={'text-black text-base font-normal'}>
                            Town/City<span className={'text-buttons'}>*</span>
                        </p>
                        <input value={cityInput} onChange={e => setCityInput(e.target.value)} type="text"
                               className={'mt-2 w-[470px] h-[50px] rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                    </div>
                    <div className={'mt-8'}>
                        <p className={'text-black text-base font-normal'}>
                            Phone Number<span className={'text-buttons'}>*</span>
                        </p>
                        <input value={phoneInput} onChange={e => setPhoneInput(e.target.value)} type="tel"
                               className={'mt-2 w-[470px] h-[50px] rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                    </div>
                    <div className={'mt-8'}>
                        <p className={'text-black text-base font-normal'}>
                            Email Address<span className={'text-buttons'}>*</span>
                        </p>
                        <input value={emailInput} onChange={e => setEmailInput(e.target.value)} type="email"
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
                            <p className={'text-base font-normal text-black'}>${}</p>
                        </div>
                        <Line/>
                        <div className={'flex items-center justify-between my-4'}>
                            <p className={'text-base font-normal text-black'}>Shipping:</p>
                            <p className={'text-base font-normal text-black'}>${}</p>
                        </div>
                        <Line/>
                        <div className={'flex items-center justify-between my-4'}>
                            <p className={'text-base font-normal text-black'}>Total:</p>
                            <p className={'text-base font-normal text-black'}>${}</p>
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
                        <Button text={'Apply Coupon'} onClick={() => {
                        }}/>
                    </div>
                    <Button style={'mt-8'} text={'Place Order'} onClick={() => {
                    }}/>
                </div>
            </div>
        </div>
    );
};

export default Checkout;