import IconButton from "../../components/IconButton.tsx";
import { Heart, Search, ShoppingCart } from "lucide-react";

const Header = () => (
    <div className={'flex items-center max-w-[1440px] mx-auto justify-between mt-10 mb-4'}>
        <div>
            <p className={"font-primary text-2xl leading-none tracking-[0.72px] font-bold text-black"}>Exclusive</p>
        </div>
        <div className={'flex gap-12'}>
            <p className={"inline-block leading-tight border-b border-black/50 font-normal text-base text-black "}>Home</p>
            <p className={"inline-block leading-tight font-normal text-base text-black"}>Contact</p>
            <p className={"inline-block leading-tight font-normal text-base text-black"}>About</p>
            <p className={"inline-block leading-tight font-normal text-base text-black"}>Sign Up</p>
        </div>
        <div className={'flex items-center justify-center gap-6'}>
            <div className={'bg-[#F5F5F5] py-2 px-4 gap-2 rounded flex items-center justify-center'}>
                <input
                    className={'h-6 w-52 border-none outline-none bg-transparent font-normal leading-normal text-xs'}
                    type="text"
                    placeholder={'What are you looking for?'}/>
                <IconButton icon={Search} size={24}/>
            </div>
            <div className={'flex gap-4 items-center justify-center'}>
                <IconButton size={32} icon={Heart}/>
                <IconButton size={32} icon={ShoppingCart}/>
            </div>
        </div>
    </div>
);

export default Header;