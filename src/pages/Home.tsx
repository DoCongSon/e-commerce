import SidebarMenu from "../components/SidebarMenu.tsx";
import { categories, menuItems } from "../containts";
import Slide from "../components/Slide.tsx";
import SessionTitle from "../components/SessionTitle.tsx";
import { useEffect, useState } from "react";
import ProductItem, { ProductItemProps } from "../components/ProductItem.tsx";
import FlashSaleTimer from "../components/FlashSaleTimer.tsx";
import { ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import DeliveryImg from "../assets/icon-delivery.svg";
import ShieldImg from "../assets/shield-tick.svg";
import HeadPhoneImg from "../assets/icon-headphone.svg";
import Button from "../components/Button.tsx";
import Line from "../components/Line.tsx";
import CategoryItem from "../components/CategoryItem.tsx";
import PlayStation from "../assets/playstation.png";
import JBL from "../assets/jbl-boombox.png";
import ServiceItem from "../components/ServiceItem.tsx";
import { useNavigate } from "react-router-dom";
import { getProductsByCategory } from "../services/product.ts";
import useUser from "../hooks/useUser.ts";

const Home = () => {
    const [flashSaleProducts, setFlashSaleProducts] = useState<ProductItemProps[]>([]);
    const [bestSellingProducts, setBestSellingProducts] = useState<ProductItemProps[]>([]);
    const [exploreOurProducts, setExploreOurProducts] = useState<ProductItemProps[]>([]);
    const [pageFlashSale, setPageFlashSale] = useState(1);
    const [pageExploreOurProducts, setPageExploreOurProducts] = useState(1);
    const [isShowScrollToTop, setIsShowScrollToTop] = useState(false);
    const [favoriteList, setFavoriteList] = useState<string[]>([]);
    const navigate = useNavigate();
    const {favoriteProducts} = useUser();

    useEffect(() => {
        setFavoriteList(favoriteProducts.map((item) => item.id));
    }, [favoriteProducts]);

    useEffect(() => {
        // add event listener when scroll
        window.addEventListener('scroll', () => {
            if(window.scrollY > 1000) {
                setIsShowScrollToTop(true);
            } else {
                setIsShowScrollToTop(false);
            }
        });

        // fetch data
        (async () => {
            const flashSale = await getProductsByCategory('Flash sale');
            const all = await getProductsByCategory('All products');
            const bestSale = await getProductsByCategory('Best selling products');
            if(flashSale) {
                setFlashSaleProducts(flashSale.slice(0, 6) as ProductItemProps[]);
            }
            if(all) {
                setExploreOurProducts(all.slice(0, 20) as ProductItemProps[]);
            }
            if(bestSale) {
                setBestSellingProducts(bestSale.slice(0, 4) as ProductItemProps[]);
            }
        })()
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    }

    const handleNextPagePlashSale = () => {
        if(pageFlashSale === Math.ceil(flashSaleProducts.length / 4)) return;
        setPageFlashSale(pageFlashSale + 1);
    };

    const handlePrevPagePlashSale = () => {
        if(pageFlashSale === 1) return;
        setPageFlashSale(pageFlashSale - 1);
    };

    const handleNextPageExploreOurProducts = () => {
        if(pageExploreOurProducts === Math.ceil(exploreOurProducts.length / 8)) return;
        setPageExploreOurProducts(pageExploreOurProducts + 1);
    };

    const handlePrevPageExploreOurProducts = () => {
        if(pageExploreOurProducts === 1) return;
        setPageExploreOurProducts(pageExploreOurProducts - 1);
    };


    return (
        <div>
            {
                isShowScrollToTop &&
              <ArrowUp
                onClick={handleScrollToTop}
                className={'animate-bounce p-3 rounded-full bg-buttons text-white hover:opacity-80 cursor-pointer transition-all fixed bottom-10 right-10 z-50'}
                size={46}/>
            }
            <div className={'flex'}>
                <div className={'mt-10 hidden laptop:block'}>
                    <SidebarMenu menuItems={menuItems}/>
                </div>
                <div className={'border-l border-black/30 ml-4 mr-11 hidden laptop:block'}/>
                {/*!fix cứng width (sửa sau)*/}
                <div className={'mt-10 max-w-full laptop:max-w-[890px]'}>
                    <Slide/>
                </div>
            </div>
            <div className={'mt-[140px] px-5 laptop:px-0'}>
                <div className={'flex justify-between items-end'}>
                    <div className={'flex items-end gap-20'}>
                        <SessionTitle title={'Flash Sales'} subtitle={'Today’s'}/>
                        <div className={'hidden laptop:block mb-[9px]'}>
                            <FlashSaleTimer time={50000} onFinish={() => {
                            }}/>
                        </div>
                    </div>
                    <div className={'hidden tablet:flex gap-2 mb-[9px]'}>
                        <ArrowLeft onClick={handlePrevPagePlashSale} size={46}
                                   className={'px-2.5 rounded-full bg-[#f5f5f5]'}/>
                        <ArrowRight onClick={handleNextPagePlashSale} size={46}
                                    className={'px-2.5 rounded-full bg-[#f5f5f5]'}/>
                    </div>
                </div>
                <div className={'mt-[60px]'}>
                    <div className={'flex justify-center gap-x-[30px] flex-wrap gap-y-[60px]'}>
                        {
                            flashSaleProducts.slice((pageFlashSale - 1) * 4, pageFlashSale * 4).map((item) => {
                                return <ProductItem key={item.id} {...item} iconButton={{favorite: true}}
                                                    isFavorite={favoriteList.includes(item.id)}/>;
                            })
                        }
                    </div>
                </div>
                <div className={'my-[76px] flex items-center justify-center'}>
                    <Button text={'View All Products'}
                            onClick={() => navigate({pathname: '/products', search: '?category=Flash+sale&page=1'})}/>
                </div>
            </div>
            <Line/>
            <div className={'my-[70px] px-5 laptop:px-0'}>
                <div className={'flex justify-between items-end'}>
                    <div className={'flex items-end gap-20'}>
                        <SessionTitle title={'Browse By Category'} subtitle={'Categories'}/>
                    </div>
                </div>
                <div className={'mt-[60px] justify-center flex flex-wrap gap-[30px]'}>
                    {categories.map((category, index) => {
                        return <CategoryItem {...category} key={index}/>
                    })
                    }
                </div>
            </div>
            <Line/>
            <div className={'my-[70px] px-5 laptop:px-0'}>
                <div className={'flex justify-between items-end'}>
                    <div className={'flex items-end gap-20'}>
                        <SessionTitle title={'Best Selling Products'} subtitle={'This Month'}/>
                    </div>
                    <div className={'flex gap-2 mb-[9px]'}>
                        <Button text={'View All'} onClick={() => navigate({
                            pathname: '/products',
                            search: '?category=Best+selling+products&page=1'
                        })}/>
                    </div>
                </div>
                <div className={'mt-[60px]'}>
                    <div className={'flex justify-center gap-x-[30px] flex-wrap gap-y-[60px]'}>
                        {
                            bestSellingProducts.map((item) => {
                                return <ProductItem iconButton={{favorite: true}} key={item.id} {...item}
                                                    isFavorite={favoriteList.includes(item.id)}/>;
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={'mt-[140px] h-[500px] bg-black px-14 hidden laptop:flex gap-10'}>
                <div className={'py-[70px]'}>
                    <p className={'font-semibold text-base leading-tight text-[#00FF66]'}>Categories</p>
                    <p className={'font-semibold text-[48px] w-[443px] leading-tight font-primary tracking-[1.92px] text-zinc-50 my-8 text-balance'}>Enhance
                        Your
                        Music
                        Experience</p>
                    <FlashSaleTimer time={500000} onFinish={() => {
                    }} type={"secondary"}/>
                    <button
                        className={"mt-10 font-medium bg-[#00FF66] py-4 px-12 rounded text-zinc-50 hover:bg-[#00FF66]/90 transition-all"}>
                        Buy Now!
                    </button>
                </div>
                <div className={'w-[500px] relative'}>
                    <img className={'z-10 absolute object-center w-full h-full'} src={JBL} alt=""/>
                    <div
                        className={'absolute top-0 bottom-0 left-0 right-0 rounded-full bg-[#D9D9D9] opacity-30 z-0 blur-[100px]'}/>
                </div>
            </div>
            <div className={'mt-[70px] px-5 laptop:px-0'}>
                <div className={'flex justify-between items-end'}>
                    <div className={'flex items-end gap-20'}>
                        <SessionTitle title={'Explore Our Products'} subtitle={'Our Products'}/>
                    </div>
                    <div className={'hidden tablet:flex gap-2 mb-[9px]'}>
                        <ArrowLeft onClick={handlePrevPageExploreOurProducts} size={46}
                                   className={'px-2.5 rounded-full bg-[#f5f5f5]'}/>
                        <ArrowRight onClick={handleNextPageExploreOurProducts} size={46}
                                    className={'px-2.5 rounded-full bg-[#f5f5f5]'}/>
                    </div>
                </div>
                <div className={'mt-[60px]'}>
                    <div className={'flex justify-center gap-x-[30px] flex-wrap gap-y-[60px]'}>
                        {
                            exploreOurProducts.slice((pageExploreOurProducts - 1) * 8, pageExploreOurProducts * 8).map((item) => {
                                return <ProductItem iconButton={{favorite: true}} key={item.id} {...item}
                                                    isFavorite={favoriteList.includes(item.id)}/>;
                            })
                        }
                    </div>
                </div>
                <div className={'my-[76px] flex items-center justify-center'}>
                    <Button text={'View All Products'}
                            onClick={() => navigate({pathname: '/products', search: '?page=1'})}/>
                </div>
            </div>
            <div className={'mt-[140px] px-5 laptop:px-0'}>
                <SessionTitle title={'New Arrival'} subtitle={'Featured'}/>
                <div
                    className={'mt-[60px] h-[600px] grid grid-cols-1 grid-rows-4 tablet:grid-rows-2 tablet:grid-cols-2  laptop:grid-cols-4 laptop:grid-rows-2 gap-[30px]'}>
                    <div className={'bg-black rounded relative laptop:col-span-2 laptop:row-span-2'}>
                        <img className={'object-contain absolute z-10 bottom-0 right-0 w-full h-full'} src={PlayStation}
                             alt=""/>
                        <div
                            className={'bg-white rounded-full blur-[100px] opacity-30 w-full h-full absolute bottom-0 right-0'}/>
                        <div className={'z-20 absolute bottom-8 left-8'}>
                            <p className={'font-primary text-2xl leading-none font-semibold tracking-[0.72px] text-zinc-50'}>PlayStation
                                5</p>
                            <p className={'mt-4 text-sm leading-normal font-normal text-zinc-50 max-w-[255px] text-balance'}>Black
                                and
                                White version of
                                the PS5 coming out on sale.</p>
                            <p className={'mt-4 font-medium inline-block text-base text-zinc-50 border-b border-white/50 cursor-pointer'}>Shop
                                Now</p>
                        </div>
                    </div>
                    <div className={'bg-black rounded relative laptop:col-span-2'}>
                        <img className={'object-contain absolute z-10 bottom-0 right-0 w-full h-full laptop:w-1/2'}
                             src={PlayStation} alt=""/>
                        <div
                            className={'bg-white rounded-full blur-[100px] opacity-30 h-full absolute bottom-0 right-0 w-1/2'}/>
                        <div className={'z-20 absolute bottom-6 left-6'}>
                            <p className={'font-primary text-2xl leading-none font-semibold tracking-[0.72px] text-zinc-50'}>PlayStation
                                5</p>
                            <p className={'mt-4 text-sm leading-normal font-normal text-zinc-50 max-w-[255px] text-balance'}>Black
                                and
                                White version of
                                the PS5 coming out on sale.</p>
                            <p className={'mt-4 font-medium inline-block text-base text-zinc-50 border-b border-white/50 cursor-pointer'}>Shop
                                Now</p>
                        </div>
                    </div>
                    <div className={'bg-black rounded relative'}>
                        <img className={'object-contain w-full h-full absolute z-10 bottom-0 right-0'} src={PlayStation}
                             alt=""/>
                        <div
                            className={'bg-white rounded-full blur-[100px] opacity-30 w-full h-full absolute bottom-0 right-0'}/>
                        <div className={'z-20 absolute bottom-6 left-6'}>
                            <p className={'font-primary text-2xl leading-none font-semibold tracking-[0.72px] text-zinc-50'}>PlayStation
                                5</p>
                            <p className={'mt-4 text-sm leading-normal font-normal text-zinc-50 max-w-[255px] text-balance'}>Black
                                and
                                White version of
                                the PS5 coming out on sale.</p>
                            <p className={'mt-4 font-medium inline-block text-base text-zinc-50 border-b border-white/50 cursor-pointer'}>Shop
                                Now</p>
                        </div>
                    </div>
                    <div className={'bg-black rounded relative'}>
                        <img className={'object-contain w-full h-full absolute z-10 bottom-0 right-0'} src={PlayStation}
                             alt=""/>
                        <div
                            className={'bg-white rounded-full blur-[100px] opacity-30 w-full h-full absolute bottom-0 right-0'}/>
                        <div className={'z-20 absolute bottom-6 left-6'}>
                            <p className={'font-primary text-2xl leading-none font-semibold tracking-[0.72px] text-zinc-50'}>PlayStation
                                5</p>
                            <p className={'mt-4 text-sm leading-normal font-normal text-zinc-50 max-w-[255px] text-balance'}>Black
                                and
                                White version of
                                the PS5 coming out on sale.</p>
                            <p className={'mt-4 font-medium inline-block text-base text-zinc-50 border-b border-white/50 cursor-pointer'}>Shop
                                Now</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'my-[140px] flex flex-wrap gap-[88px] items-center justify-center px-5 laptop:px-0'}>
                <ServiceItem title={'FREE AND FAST DELIVERY'} description={'Free delivery for all orders over $140'}
                             icon={DeliveryImg}/>
                <ServiceItem title={'24/7 CUSTOMER SERVICE'} description={'Friendly 24/7 customer support'}
                             icon={HeadPhoneImg}/>
                <ServiceItem title={'MONEY BACK GUARANTEE'} description={'We reurn money within 30 days'}
                             icon={ShieldImg}/>
            </div>
        </div>
    );
}

export default Home;
