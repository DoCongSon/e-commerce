import SidebarMenu from "../components/SidebarMenu.tsx";
import { categories, menuItems } from "../containts";
import Slide from "../components/Slide.tsx";
import SessionTitle from "../components/SessionTitle.tsx";
import { productsList } from "../FakeData/products.ts";
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

const Home = () => {
    const [plashSaleProducts, setPlashSaleProducts] = useState<ProductItemProps[]>([]);
    const [bestSellingProducts, setBestSellingProducts] = useState<ProductItemProps[]>([]);
    const [exploreOurProducts, setExploreOurProducts] = useState<ProductItemProps[]>([]);
    const [pagePlashSale, setPagePlashSale] = useState(1);
    const [pageExploreOurProducts, setPageExploreOurProducts] = useState(1);
    const [isShowScrollToTop, setIsShowScrollToTop] = useState(false);

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
        setPlashSaleProducts(productsList);
        setExploreOurProducts(productsList);
        setBestSellingProducts(productsList.slice(0, 4));
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    }

    const handleNextPagePlashSale = () => {
        if(pagePlashSale === Math.ceil(productsList.length / 4)) return;
        setPagePlashSale(pagePlashSale + 1);
    };

    const handlePrevPagePlashSale = () => {
        if(pagePlashSale === 1) return;
        setPagePlashSale(pagePlashSale - 1);
    };

    const handleNextPageExploreOurProducts = () => {
        if(pageExploreOurProducts === Math.ceil(productsList.length / 8)) return;
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
                <div className={'mt-10'}>
                    <SidebarMenu menuItems={menuItems}/>
                </div>
                <div className={'border-l border-black/30 ml-4 mr-11'}/>
                {/*!fix cứng width (sửa sau)*/}
                <div className={'mt-10 max-w-[890px]'}>
                    <Slide/>
                </div>
            </div>
            <div className={'mt-[140px]'}>
                <div className={'flex justify-between items-end'}>
                    <div className={'flex items-end gap-20'}>
                        <SessionTitle title={'Flash Sales'} subtitle={'Today’s'}/>
                        <div className={'mb-[9px]'}>
                            <FlashSaleTimer time={3434} onFinish={() => {
                            }}/>
                        </div>
                    </div>
                    <div className={'flex gap-2 mb-[9px]'}>
                        <ArrowLeft onClick={handlePrevPagePlashSale} size={46}
                                   className={'px-2.5 rounded-full bg-[#f5f5f5]'}/>
                        <ArrowRight onClick={handleNextPagePlashSale} size={46}
                                    className={'px-2.5 rounded-full bg-[#f5f5f5]'}/>
                    </div>
                </div>
                <div className={'mt-[60px]'}>
                    <div className={'flex gap-x-[30px] flex-wrap gap-y-[60px]'}>
                        {
                            plashSaleProducts.slice((pagePlashSale - 1) * 4, (pagePlashSale - 1) * 4 + 4).map((item, index) => {
                                return <ProductItem key={index} {...item} iconButton={{view: true, favorite: true}}/>;
                            })
                        }
                    </div>
                </div>
                <div className={'my-[76px] flex items-center justify-center'}>
                    <Button text={'View All Products'} onClick={() => {
                    }}/>
                </div>
            </div>
            <Line/>
            <div className={'my-[70px]'}>
                <div className={'flex justify-between items-end'}>
                    <div className={'flex items-end gap-20'}>
                        <SessionTitle title={'Browse By Category'} subtitle={'Categories'}/>
                    </div>
                </div>
                <div className={'mt-[60px] flex flex-wrap gap-[30px]'}>
                    {categories.map((category, index) => {
                        return <CategoryItem {...category} key={index}/>
                    })
                    }
                </div>
            </div>
            <Line/>
            <div className={'my-[70px]'}>
                <div className={'flex justify-between items-end'}>
                    <div className={'flex items-end gap-20'}>
                        <SessionTitle title={'Best Selling Products'} subtitle={'This Month'}/>
                    </div>
                    <div className={'flex gap-2 mb-[9px]'}>
                        <Button text={'View All'} onClick={() => {
                        }}/>
                    </div>
                </div>
                <div className={'mt-[60px]'}>
                    <div className={'flex gap-x-[30px] flex-wrap gap-y-[60px]'}>
                        {
                            bestSellingProducts.map((item, index) => {
                                return <ProductItem iconButton={{view: true, favorite: true}} key={index} {...item}/>;
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={'mt-[140px] h-[500px] bg-black px-14 flex gap-10'}>
                <div className={'py-[70px]'}>
                    <p className={'font-semibold text-base leading-tight text-[#00FF66]'}>Categories</p>
                    <p className={'font-semibold text-[48px] w-[443px] leading-tight font-primary tracking-[1.92px] text-zinc-50 my-8 text-balance'}>Enhance
                        Your
                        Music
                        Experience</p>
                    <FlashSaleTimer time={2345} onFinish={() => {
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
            <div className={'mt-[70px]'}>
                <div className={'flex justify-between items-end'}>
                    <div className={'flex items-end gap-20'}>
                        <SessionTitle title={'Explore Our Products'} subtitle={'Our Products'}/>
                    </div>
                    <div className={'flex gap-2 mb-[9px]'}>
                        <ArrowLeft onClick={handlePrevPageExploreOurProducts} size={46}
                                   className={'px-2.5 rounded-full bg-[#f5f5f5]'}/>
                        <ArrowRight onClick={handleNextPageExploreOurProducts} size={46}
                                    className={'px-2.5 rounded-full bg-[#f5f5f5]'}/>
                    </div>
                </div>
                <div className={'mt-[60px]'}>
                    <div className={'flex gap-x-[30px] flex-wrap gap-y-[60px]'}>
                        {
                            exploreOurProducts.slice((pageExploreOurProducts - 1) * 8, (pageExploreOurProducts - 1) * 8 + 8).map((item, index) => {
                                return <ProductItem iconButton={{view: true, favorite: true}} key={index} {...item}/>;
                            })
                        }
                    </div>
                </div>
                <div className={'my-[76px] flex items-center justify-center'}>
                    <Button text={'View All Products'} onClick={() => {
                    }}/>
                </div>
            </div>
            <div className={'mt-[140px]'}>
                <SessionTitle title={'New Arrival'} subtitle={'Featured'}/>
                <div className={'mt-[60px] h-[600px] grid grid-cols-4 grid-rows-2 gap-[30px]'}>
                    <div className={'bg-black rounded relative col-span-2 row-span-2'}>
                        <img className={'object-cover absolute z-10 bottom-0 right-0'} src={PlayStation} alt=""/>
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
                    <div className={'bg-black rounded relative col-span-2'}>
                        <img className={'object-cover absolute z-10 bottom-0 right-0 w-1/2'} src={PlayStation} alt=""/>
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
                        <img className={'object-cover absolute z-10 bottom-0 right-0'} src={PlayStation} alt=""/>
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
                        <img className={'object-cover absolute z-10 bottom-0 right-0'} src={PlayStation} alt=""/>
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
            <div className={'my-[140px] flex gap-[88px] items-center justify-center'}>
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
