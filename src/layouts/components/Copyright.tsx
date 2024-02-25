import { CopyrightIcon } from "lucide-react";

const Copyright = () => {
    return (
        <div className={'flex items-center justify-center gap-1.5 pt-4 pb-6 border-t border-white/50 bg-black'}>
            <CopyrightIcon size={20} opacity={0.3} color={"white"}/>
            <p className={'text-base font-normal text-white opacity-30'}>Copyright DoCongSon 2024. All right
                reserved</p>
        </div>
    );
};

export default Copyright;