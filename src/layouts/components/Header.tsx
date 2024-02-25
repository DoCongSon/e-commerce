import IconButton from "../../components/IconButton.tsx";
import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import { navBarItems, userMenuItems } from "../../containts";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import useUser from "../../hooks/useUser.ts";

const Header = () => {
    const location = useLocation();
    const [isShowMenuUser, setIsShowMenuUser] = useState(false);
    const menuUserRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate()
    const user = useUser();

    const navBar = useMemo(() => {
        if(user) return navBarItems.filter(item => item.name !== 'Log In' && item.name !== 'Sign Up');
        else return navBarItems;
    }, [
        user
    ]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(menuUserRef.current && !menuUserRef.current.contains(event.target as Node)) {
                setIsShowMenuUser(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    useEffect(() => {
        setIsShowMenuUser(false);
    }, [location]);

    return (
        <div className={'flex items-center max-w-[1170px] mx-auto justify-between mt-10 mb-4'}>
            <div>
                <Link to={'/'}
                      className={"font-primary text-2xl leading-none tracking-[0.72px] font-bold text-black"}>Exclusive</Link>
            </div>
            <div className={'flex gap-12 transition-all'}>
                {navBar && navBar.map((item, index) => {
                    if(item.to === location.pathname) return (
                        <Link to={item.to} key={index}
                              className={"inline-block leading-tight font-medium text-base text-buttons border-b border-buttons/50"}>{item.name}</Link>
                    )
                    return (
                        <Link to={item.to} key={index}
                              className={"inline-block leading-tight font-medium text-base text-black hover:text-buttons"}>{item.name}</Link>
                    );
                })}
            </div>
            <div className={'flex items-center justify-center gap-6'}>
                <div className={'bg-[#F5F5F5] py-2 px-4 gap-2 rounded flex items-center justify-center'}>
                    <input
                        className={'h-6 w-52 border-none outline-none bg-transparent font-normal leading-normal text-xs'}
                        type="text"
                        placeholder={'What are you looking for?'}/>
                    <IconButton icon={Search} size={24}/>
                </div>
                {
                    user &&
                  <div className={'flex gap-4 items-center justify-center'}>
                    <IconButton onClick={() => navigate('/wishlist')} size={32} icon={Heart}/>
                    <IconButton onClick={() => navigate('/cart')} size={32} icon={ShoppingCart}/>
                    <div className={'relative'}>
                      <IconButton onClick={() => setIsShowMenuUser(!isShowMenuUser)} icon={UserRound} type={'primary'}/>
                        {
                            isShowMenuUser &&
                          <div ref={menuUserRef}
                               className={'select-none w-[224px] absolute z-20 right-0 top-11 bg-black/50 backdrop-blur-[75px] text-zinc-50 rounded pt-4 pb-3 px-3 flex flex-col gap-4'}>
                              {
                                  userMenuItems.map((item, index) => {
                                      return (
                                          <Link to={item.to} key={index}
                                                className={'flex gap-4 items-center transition-all hover:translate-x-4'}>
                                              <div className={'w-6 h-6'}>
                                                  <img className={'w-full'} src={item.icon} alt=""/>
                                              </div>
                                              <p className={'text-sm font-normal leading-normal'}>{item.name}</p>
                                          </Link>
                                      );
                                  })
                              }
                          </div>
                        }
                    </div>
                  </div>
                }
            </div>
        </div>
    );
}
export default Header;