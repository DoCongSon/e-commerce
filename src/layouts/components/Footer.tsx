import { Facebook, Instagram, Linkedin, SendHorizontal, Twitter } from "lucide-react";
import QRcodeImg from "../../assets/Qrcode 1.png";
import GooglePlay from "../../assets/google-play.png";
import AppStore from "../../assets/appstore.png";
import IconButton from "../../components/IconButton.tsx";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Footer = () => {

    const getVoucher = () => {
        toast('Voucher has been sent to your email', {type: 'success', toastId: 1});
    }

    return (
        <div className="w-full bg-black">
            <div
                className="flex flex-wrap gap-14 items-start justify-center w-full max-w-[1170px] mx-auto text-zinc-50 pt-20 pb-[60px]">
                <div>
                    <a href={'#'}
                       className={"inline-block font-primary text-2xl leading-none tracking-[0.72px] font-bold mb-6"}>Exclusive</a>
                    <p className={'font-medium text-xl mb-6'}>Subscribe</p>
                    <div className={'flex flex-col gap-4'}>
                        <p className={'text-base font-normal'}>Get voucher free ship for first oder</p>
                        <div className={'flex px-4 py-3 rounded border-2 border-zinc-50'}>
                            <input className={'text-base font-normal h-6 bg-transparent outline-none'}
                                   placeholder={'Enter your email'}
                                   type="text"/>
                            <IconButton onClick={getVoucher} icon={SendHorizontal} size={24} color={'#FAFAFA'}/>
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
                        <Link to={'/account/my-profile'} className={'text-base font-normal'}>My Account</Link>
                        <p className={'text-base font-normal'}><Link to={'/login'}>Login</Link> / <Link
                            to={'/signup'}>Register</Link></p>
                        <Link to={'/cart'} className={'text-base font-normal'}>Cart</Link>
                        <Link to={'/wishlist'} className={'text-base font-normal'}>Wishlist</Link>
                        <Link to={'/'} className={'text-base font-normal'}>Shop</Link>
                    </div>
                </div>
                <div>
                    <p className={'font-medium text-xl mb-6'}>Quick Link</p>
                    <div className={'flex flex-col gap-4'}>
                        <Link to={'./policy'} className={'text-base font-normal'}>Privacy Policy</Link>
                        <Link to={'/Terms'} className={'text-base font-normal'}>Terms Of Use</Link>
                        <Link to={'/FAQ'} className={'text-base font-normal'}>FAQ</Link>
                        <Link to={'/contact'} className={'text-base font-normal'}>Contact</Link>
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