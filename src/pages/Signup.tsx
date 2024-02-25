import SignupImg from '../assets/signup.jpg';
import Button from "../components/Button.tsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUpWithEmail } from "../services/user.ts";
import { handleErrors } from "../utils";

const Signup = () => {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            await signUpWithEmail({email: emailInput, password: passwordInput, displayName: nameInput});
            navigate('/account/my-profile');
        } catch (error) {
            setError(handleErrors(error));
        }
    }


    return (
        <div className={'mt-[60px] mb-[140px] flex items-center justify-between'}>
            <div className={'w-[700px]'}>
                <img className={'w-full '} src={SignupImg} alt="signup"/>
            </div>
            <div className={'w-[370px]'}>
                <p className={'font-primary text-4xl leading-[30px] text-black font-medium tracking-[1.44px]'}>Create an
                    account</p>
                <p className={'font-normal text-base text-black mt-6'}>Enter your details below</p>
                <div className={'mt-12 flex flex-col gap-10'}>
                    <input value={nameInput} onChange={(e) => setNameInput(e.target.value)}
                           className={'outline-none font-normal text-base text-black pb-2 border-b'}
                           placeholder={'Full name'}/>
                    <input value={emailInput} onChange={(e) => setEmailInput(e.target.value)}
                           className={'outline-none font-normal text-base text-black pb-2 border-b'}
                           placeholder={'Email'}/>
                    <input value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)}
                           className={'outline-none font-normal text-base text-black pb-2 border-b'}
                           placeholder={'Password'}/>
                </div>
                {error && <p className={'font-normal text-base text-buttons mt-6'}>Error: {error}</p>}
                <div className={'mt-10'}>
                    <Button style={'w-full'} text={"Create Account"} onClick={handleSignUp}/>
                </div>
                <div className={'flex justify-center mt-[34px]'}>
                    <span className={'font-normal text-base text-black opacity-70'}>Already have account?</span>
                    <Link to={'/login'}
                          className={'ml-4 font-medium text-base text-black opacity-70 border-b border-black/50'}>Log
                        in</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;