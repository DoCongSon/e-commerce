import SignupImg from '../assets/signup.jpg';
import Button from "../components/Button.tsx";
import { useState } from "react";
import IconGoogle from "../assets/Icon-Google.svg";
import { logInWithEmail, logInWithGoogle } from "../services/user.ts";
import { Link, useNavigate } from "react-router-dom";
import { handleErrors } from "../utils";

const Login = () => {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleLogInWithEmail = async () => {
        try {
            await logInWithEmail({email: emailInput, password: passwordInput});
            navigate('/account/my-profile');
        } catch (error) {
            setError(handleErrors(error));
        }
    }

    const handleLogInWithGoogle = async () => {
        try {
            await logInWithGoogle();
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
                <p className={'font-primary text-4xl leading-[30px] text-black font-medium tracking-[1.44px]'}>Log in to
                    Exclusive</p>
                <p className={'font-normal text-base text-black mt-6'}>Enter your details below</p>
                <div className={'mt-12 flex flex-col gap-10'}>
                    <input autoComplete={'email'} type={"email"} value={emailInput}
                           onChange={(e) => setEmailInput(e.target.value)}
                           className={'outline-none font-normal text-base text-black pb-2 border-b'}
                           placeholder={'Email'}/>
                    <input autoComplete={'password'} value={passwordInput}
                           type={"password"}
                           onChange={(e) => setPasswordInput(e.target.value)}
                           className={'outline-none font-normal text-base text-black pb-2 border-b'}
                           placeholder={'Password'}/>
                </div>
                {error && <p className={'font-normal text-base text-buttons mt-6'}>Error: {error}</p>}
                <div className={'mt-10 flex items-center justify-between'}>
                    <Button text={"Log In"} onClick={handleLogInWithEmail}/>
                    <button className={'transition-all font-normal text-base text-buttons'}>
                        Forget Password?
                    </button>
                </div>
                <button
                    onClick={handleLogInWithGoogle}
                    className={'mt-10 flex gap-4 items-center justify-center w-full transition-all font-medium py-4 px-12 rounded text-black border hover:text-[#7D8184]'}>
                    <div className={'w-6 h-6'}>
                        <img className={'w-full'} src={IconGoogle} alt=""/>
                    </div>
                    Log in with Google
                </button>
                <div className={'flex justify-center mt-[34px]'}>
                    <span className={'font-normal text-base text-black opacity-70'}>Don't have account?</span>
                    <Link to={'/signup'}
                          className={'ml-4 font-medium text-base text-black opacity-70 border-b border-black/50'}>Sign
                        up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;