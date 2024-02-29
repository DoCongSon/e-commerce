import { accountMenuItems } from "../containts";
import { Link, Outlet, useLocation } from "react-router-dom";
import useUser from "../hooks/useUser.ts";

const Account = () => {
    const location = useLocation();
    const {user} = useUser();

    return (
        <div className={'mt-20 mb-[140px]'}>
            <p className={'text-right text-base font-normal text-black'}>Welcome! <span
                className={'text-buttons'}>{user?.displayName}</span>
            </p>
            <div className={'flex justify-between mt-20'}>
                <div className={'gap-6 flex flex-col'}>
                    {accountMenuItems.map((item, index) => {
                        if(item.children) {
                            return (
                                <div key={index}>
                                    <p className={'text-black text-base font-medium'}>{item.name}</p>
                                    <div className={'ml-9 mt-4 flex flex-col gap-2'}>
                                        {item.children.map((child, index) => {
                                            if(location.pathname === child.to) {
                                                return (
                                                    <div key={index}>
                                                        <Link to={child.to}
                                                              className={'text-buttons text-base font-normal'}>{child.name}</Link>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div key={index}>
                                                        <Link to={child.to}
                                                              className={'text-black text-base font-normal opacity-50'}>{child.name}</Link>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className={'mt-6'} key={index}>
                                    <Link to={item.to} className={'text-black text-base font-medium'}>{item.name}</Link>
                                </div>
                            )
                        }
                    })
                    }
                </div>
                <div className={'px-20 py-10 bg-white shadow rounded w-[870px]'}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Account;