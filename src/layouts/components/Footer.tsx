import { Facebook, Instagram, Linkedin, SendHorizontal, Twitter } from "lucide-react";
import QRcodeImg from "../../assets/Qrcode 1.png";
import GooglePlay from "../../assets/google-play.png";
import AppStore from "../../assets/appstore.png";
import IconButton from "../../components/IconButton.tsx";

const Footer = () => {
    return (
        <div className="w-full bg-black">
            <div
                className="flex items-start justify-between w-full max-w-[1170px] mx-auto text-zinc-50 pt-20 pb-[60px]">
                <div>
                    <a href={'#'}
                       className={"inline-block font-primary text-2xl leading-none tracking-[0.72px] font-bold mb-6"}>Exclusive</a>
                    <p className={'font-medium text-xl mb-6'}>Subscribe</p>
                    <div className={'flex flex-col gap-4'}>
                        <p className={'text-base font-normal'}>Get 10% off your first order</p>
                        <div className={'flex px-4 py-3 rounded border-2 border-zinc-50'}>
                            <input className={'text-base font-normal h-6 bg-transparent outline-none'}
                                   placeholder={'Enter your email'}
                                   type="text"/>
                            <IconButton icon={SendHorizontal} size={24} color={'#FAFAFA'}/>
                        </div>
                    </div>
                </div>
                <div className={'max-w-[200px]'}>
                    <p className={'font-medium text-xl mb-6'}>Support</p>
                    <div className={'flex flex-col gap-4'}>
                        <p className={'text-base font-normal text-balance '}>111 Bijoy sarani, Dhaka, DH 1515,
                            Bangladesh.</p>
                        <p className={'text-base font-normal'}>exclusive@gmail.com</p>
                        <p className={'text-base font-normal'}>+88015-88888-9999</p>
                    </div>
                </div>
                <div>
                    <p className={'font-medium text-xl mb-6'}>Account</p>
                    <div className={'flex flex-col gap-4'}>
                        <p className={'text-base font-normal'}>My Account</p>
                        <p className={'text-base font-normal'}>Login / Register</p>
                        <p className={'text-base font-normal'}>Cart</p>
                        <p className={'text-base font-normal'}>Wishlist</p>
                        <p className={'text-base font-normal'}>Shop</p>
                    </div>
                </div>
                <div>
                    <p className={'font-medium text-xl mb-6'}>Quick Link</p>
                    <div className={'flex flex-col gap-4'}>
                        <p className={'text-base font-normal'}>Privacy Policy</p>
                        <p className={'text-base font-normal'}>Terms Of Use</p>
                        <p className={'text-base font-normal'}>FAQ</p>
                        <p className={'text-base font-normal'}>Contact</p>
                    </div>
                </div>
                <div>
                    <p className={'font-medium text-xl mb-6'}>Download App</p>
                    <p className={'font-medium text-xs leading-normal opacity-70 mb-6'}>Save $3 with App New User
                        Only</p>
                    <div className={'grid grid-cols-[auto_auto] grid-rows-2 gap-x-2 gap-y-1 col-auto'}>
                        <img className={'row-span-2'} src={QRcodeImg} alt="QR-code"/>
                        <img src={GooglePlay} alt="google-play"/>
                        <img src={AppStore} alt="app-store"/>
                    </div>
                    <div className={'flex items-center justify-start gap-6 mt-6'}>
                        <IconButton icon={Facebook} size={24} color={'white'}/>
                        <IconButton icon={Twitter} size={24} color={'white'}/>
                        <IconButton icon={Instagram} size={24} color={'white'}/>
                        <IconButton icon={Linkedin} size={24} color={'white'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;