import Button from "../components/Button.tsx";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();

    return (
        <div className={'my-[140px] flex flex-col items-center'}>
            <p className={'text-[110px] font-semibold font-primary tracking-[3.3px] leading-[115px] text-black'}>404 Not
                Found</p>
            <p className={'mt-10 text-base font-normal text-black'}>Your visited page not found. You may go home
                page.</p>
            <Button style={'mt-20'} text={'Back to home page'} onClick={() => navigate('/')}/>
        </div>
    );
};

export default Error;