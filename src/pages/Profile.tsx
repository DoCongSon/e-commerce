import { useEffect, useState } from "react";
import Button from "../components/Button.tsx";
import useUser from "../hooks/useUser.ts";

const Profile = () => {
    const [displayNameInput, setDisplayNameInput] = useState<string>('');
    const [phoneInput, setPhoneInput] = useState<string>('');
    const [emailInput, setEmailInput] = useState<string>('');
    const [currentPasswordInput, setCurrentPasswordInput] = useState<string>('');
    const [newPasswordInput, setNewPasswordInput] = useState<string>('');
    const [confirmPasswordInput, setConfirmPasswordInput] = useState<string>('');
    const user = useUser();

    useEffect(() => {
        if(user) {
            setDisplayNameInput(user.displayName || '');
            setPhoneInput(user.phoneNumber || '');
            setEmailInput(user.email || '');
        }
    }, [user]);

    return (
        <div className={'flex flex-col gap-4'}>
            <h1 className={'font-medium text-xl text-buttons'}>Edit Your Profile</h1>
            <div className={'flex gap-[50px]'}>
                <div className={'w-full'}>
                    <p className={'text-black text-base font-medium'}>
                        Full Name
                    </p>
                    <input value={displayNameInput} onChange={e => setDisplayNameInput(e.target.value)} type="text"
                           className={'mt-2 h-[50px] w-full rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                </div>
                <div className={'w-full'}>
                    <p className={'text-black text-base font-medium'}>
                        Phone Number
                    </p>
                    <input value={phoneInput} onChange={e => setPhoneInput(e.target.value)} type="text"
                           className={'mt-2 h-[50px] w-full rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                </div>
            </div>
            <div className={'flex gap-[50px]'}>
                <div className={'w-full'}>
                    <p className={'text-black text-base font-medium'}>
                        Email
                    </p>
                    <input value={emailInput} onChange={e => setEmailInput(e.target.value)} type="email"
                           className={'mt-2 h-[50px] w-full rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                </div>
            </div>
            <div className={'flex gap-[50px]'}>
                <div className={'w-full'}>
                    <p className={'text-black text-base font-medium'}>
                        Password Changes
                    </p>
                    <input placeholder={'Current password'} value={currentPasswordInput}
                           onChange={e => setCurrentPasswordInput(e.target.value)}
                           type="text"
                           className={'mt-2 h-[50px] w-full rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                    <input placeholder={'New password'}
                           value={newPasswordInput} onChange={e => setNewPasswordInput(e.target.value)}
                           type="text"
                           className={'mt-4 h-[50px] w-full rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                    <input placeholder={'Confirm new password'}
                           value={confirmPasswordInput} onChange={e => setConfirmPasswordInput(e.target.value)}
                           type="text"
                           className={'mt-4 h-[50px] w-full rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                </div>
            </div>
            <div className={'mt-2 flex gap-4 justify-end'}>
                <Button type={'secondary'} text={'Cancel'} onClick={() => {
                }}/>
                <Button text={'Save Changes'} onClick={() => {
                }}/>
            </div>
        </div>
    );
};

export default Profile;