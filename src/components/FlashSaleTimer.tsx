import { useEffect, useState } from "react";

interface FlashSaleTimerProps {
    time: number;
    type?: 'primary' | 'secondary';
    onFinish: () => void;
}

const FlashSaleTimer = (props: FlashSaleTimerProps) => {
    const [timer, setTimer] = useState(props.time);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if(timer > 0) {
            setDays(Math.floor(timer / 86400));
            setHours(Math.floor((timer % 86400) / 3600));
            setMinutes(Math.floor(((timer % 86400) % 3600) / 60));
            setSeconds(Math.floor(((timer % 86400) % 3600) % 60));
        } else {
            props.onFinish();
        }
    }, [timer]);

    useEffect(() => {
        const id = setTimeout(() => {
            setTimer(timer - 1);
        }, 1000);
        return () => clearTimeout(id);
    }, [timer]);

    if(props.type === 'secondary') return (
        <div className="flex gap-6 items-center">
            <div className="w-[62px] h-[62px] rounded-full bg-white flex flex-col items-center justify-center">
                <p className="block font-semibold font-primary leading-tight text-black">{days < 10 ? '0' + days : days}</p>
                <p className="block font-normal -mt-1 text-xs leading-[18px] text-black">Days</p>
            </div>
            <div className="w-[62px] h-[62px] rounded-full bg-white flex flex-col items-center justify-center">
                <p className="block font-semibold font-primary leading-tight text-black">{hours < 10 ? '0' + hours : hours}</p>
                <p className="block font-normal -mt-1 text-xs leading-[18px] text-black">Hours</p>
            </div>
            <div className="w-[62px] h-[62px] rounded-full bg-white flex flex-col items-center justify-center">
                <p className="block font-semibold font-primary leading-tight text-black">{minutes < 10 ? '0' + minutes : minutes}</p>
                <p className="block font-normal -mt-1 text-xs leading-[18px] text-black">Minutes</p>
            </div>
            <div className="w-[62px] h-[62px] rounded-full bg-white flex flex-col items-center justify-center">
                <p className="block font-semibold font-primary leading-tight text-black">{seconds < 10 ? '0' + seconds : seconds}</p>
                <p className="block font-normal -mt-1 text-xs leading-[18px] text-black">Seconds</p>
            </div>
        </div>
    )

    return (
        <div className="flex gap-4 items-center">
            <div>
                <p className="block font-medium text-xs leading-normal text-black">Days</p>
                <p className="block font-bold font-primary text-[32px] leading-[30px] text-black">{days < 10 ? '0' + days : days}</p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="w-1 h-1 rounded-full bg-[#E07575]"></div>
                <div className="w-1 h-1 rounded-full bg-[#E07575]"></div>
            </div>
            <div>
                <p className="block font-medium text-xs leading-normal text-black">Hours</p>
                <p className="block font-bold font-primary text-[32px] leading-[30px] text-black">{hours < 10 ? '0' + hours : hours}</p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="w-1 h-1 rounded-full bg-[#E07575]"></div>
                <div className="w-1 h-1 rounded-full bg-[#E07575]"></div>
            </div>
            <div>
                <p className="block font-medium text-xs leading-normal text-black">Minutes</p>
                <p className="block font-bold font-primary text-[32px] leading-[30px] text-black">{minutes < 10 ? '0' + minutes : minutes}</p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="w-1 h-1 rounded-full bg-[#E07575]"></div>
                <div className="w-1 h-1 rounded-full bg-[#E07575]"></div>
            </div>
            <div>
                <p className="block font-medium text-xs leading-normal text-black">Seconds</p>
                <p className="block font-bold font-primary text-[32px] leading-[30px] text-black">{seconds < 10 ? '0' + seconds : seconds}</p>
            </div>
        </div>
    );
};

export default FlashSaleTimer;