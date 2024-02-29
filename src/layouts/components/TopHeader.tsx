import { ChevronDown } from "lucide-react";

interface TopHeaderProps {
    title: string;
    titleButton?: string;
    onClick?: () => void;
}

const TopHeader = (props: TopHeaderProps) => (
    <div className="laptop:block hidden w-full bg-black">
        <div className="flex items-center relative justify-end w-full laptop:max-w-[1170px] mx-auto h-12 text-zinc-50">
            <div className="flex absolute left-1/2 -translate-x-1/2 text-sm font-normal">
                <p>{props.title}</p>
                <p className="cursor-pointer font-semibold underline ml-2"
                   onClick={props.onClick}>{props.titleButton}</p>
            </div>
            <div className="flex items-center cursor-pointer font-normal text-sm cursor-pointer">
                <p>EngLish</p>
                <ChevronDown className="ml-1" size={24}/>
            </div>
        </div>
    </div>
);

export default TopHeader;