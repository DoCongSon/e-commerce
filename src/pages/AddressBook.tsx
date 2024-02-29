import Button from "../components/Button.tsx";
import { useEffect, useState } from "react";
import { updateAddressBook } from "../services/user.ts";
import useUser from "../hooks/useUser.ts";
import { handleErrors } from "../utils";
import { toast } from "react-toastify";

const AddressBook = () => {
    const [companyNameInput, setCompanyNameInput] = useState<string>('');
    const [addressInput, setAddressInput] = useState<string>('');
    const [apartmentInput, setApartmentInput] = useState<string>('');
    const [cityInput, setCityInput] = useState<string>('');
    const [phoneInput, setPhoneInput] = useState<string>('');
    const {user, addressBook} = useUser();

    useEffect(() => {
        if(addressBook) {
            setCompanyNameInput(addressBook.companyName);
            setAddressInput(addressBook.address);
            setApartmentInput(addressBook.apartment);
            setCityInput(addressBook.city);
            setPhoneInput(addressBook.phone);
        }
    }, [addressBook]);

    const handleSaveChanges = async () => {
        if(!user) return;
        try {
            await updateAddressBook(user.uid, {
                address: addressInput,
                apartment: apartmentInput,
                city: cityInput,
                companyName: companyNameInput,
                phone: phoneInput
            });
            toast('Address book updated successfully', {type: 'success'});
        } catch (error) {
            console.error(handleErrors(error));
        }
    }

    return (
        <div className={'flex flex-col gap-4'}>
            <h1 className={'font-medium text-xl text-buttons'}>Edit Your Address Book</h1>
            <div className={'flex gap-[50px]'}>
                <div className={'w-full'}>
                    <p className={'text-black text-base font-medium'}>
                        Company Name
                    </p>
                    <input value={companyNameInput} onChange={e => setCompanyNameInput(e.target.value)} type="text"
                           className={'mt-2 h-[50px] w-full rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                </div>
                <div className={'w-full'}>
                    <p className={'text-black text-base font-medium'}>
                        Street Address<span className={'text-buttons'}>*</span>
                    </p>
                    <input value={addressInput} onChange={e => setAddressInput(e.target.value)}
                           type="email"
                           className={'mt-2 h-[50px] w-full rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                </div>
            </div>
            <div className={'flex gap-[50px]'}>
                <div className={'w-full'}>
                    <p className={'text-black text-base font-medium'}>
                        Apartment, floor, etc. (optional)
                    </p>
                    <input value={apartmentInput} onChange={e => setApartmentInput(e.target.value)} type="text"
                           className={'mt-2 h-[50px] w-full rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                </div>
                <div className={'w-full'}>
                    <p className={'text-black text-base font-medium'}>
                        Town/City<span className={'text-buttons'}>*</span>
                    </p>
                    <input value={cityInput} onChange={e => setCityInput(e.target.value)}
                           type="email"
                           className={'mt-2 h-[50px] w-full rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                </div>
            </div>
            <div className={'flex gap-[50px]'}>
                <div className={'w-full'}>
                    <p className={'text-black text-base font-medium'}>
                        Phone Number<span className={'text-buttons'}>*</span>
                    </p>
                    <input value={phoneInput} onChange={e => setPhoneInput(e.target.value)} type="text"
                           className={'mt-2 h-[50px] w-full rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                </div>
            </div>
            <div className={'mt-2 flex gap-4 justify-end'}>
                <Button type={'secondary'} text={'Cancel'}
                        onClick={() => {
                            if(addressBook) {
                                setCompanyNameInput(addressBook.companyName);
                                setAddressInput(addressBook.address);
                                setApartmentInput(addressBook.apartment);
                                setCityInput(addressBook.city);
                                setPhoneInput(addressBook.phone);
                            }
                        }}/>
                <Button text={'Save Changes'} onClick={handleSaveChanges}/>
            </div>
        </div>
    );
};

export default AddressBook;