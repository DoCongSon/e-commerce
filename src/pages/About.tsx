import AboutImg from '../assets/about.jpg'
import BackgroundIcon from "../assets/services-bg.svg";
import StoreIcon from "../assets/store.svg";
import DolalBagIcon from "../assets/dolal-bag.svg";
import ShopingIcon from "../assets/Icon-Shopping bag.svg";
import SaleIcon from "../assets/Icon-Sale.svg";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { members } from "../containts";
import ServiceItem from "../components/ServiceItem.tsx";
import DeliveryImg from "../assets/icon-delivery.svg";
import HeadPhoneImg from "../assets/icon-headphone.svg";
import ShieldImg from "../assets/shield-tick.svg";

const About = () => {
    return (
        <div className={'mt-10'}>
            <div className={'flex items-center justify-between'}>
                <div className={'w-[525px]'}>
                    <h1 className={'font-semibold font-primary text-[54px] leading-[64px] tracking-[3.24px] text-black'}>Our
                        Story</h1>
                    <p className={'mt-10 text-balance text-black text-base font-normal'}>Launced in 2015, Exclusive is
                        South
                        Asia’s
                        premier
                        online shopping makterplace with an active
                        presense in Bangladesh. Supported by wide range of tailored marketing, data and service
                        solutions,
                        Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the
                        region. </p>
                    <p className={'mt-6 text-balance text-black text-base font-normal'}>Exclusive has more than 1
                        Million
                        products to
                        offer,
                        growing at a very fast. Exclusive offers a diverse assotment in categories ranging from
                        consumer.</p>
                </div>
                <div className={'w-[840px]'}>
                    <img className={'w-full object-cover'} src={AboutImg} alt="about"/>
                </div>
            </div>
            <div>
                <div className={'flex items-center justify-between mt-[140px]'}>
                    <div
                        className="group hover:bg-buttons hover:shadow hover:border-none transition-all flex flex-col items-center w-[270px] h-[230px] flex flex-col items-center justify-center rounded border border-black/30">
                        <div className="relative w-20 h-20 flex items-center justify-center">
                            <img className="absolute" src={BackgroundIcon} alt="bg"/>
                            <img className="absolute" src={StoreIcon} alt={''}/>
                        </ div>
                        <p className="mt-6 mb-3 font-bold text-3xl leading-none text-black group-hover:text-zinc-50 tracking-[1.28px]">10.5k</p>
                        <p className="text-base font-normal text-black group-hover:text-zinc-50">Sallers active our
                            site</p>
                    </div>
                    <div
                        className="group hover:bg-buttons hover:shadow hover:border-none transition-all flex flex-col items-center w-[270px] h-[230px] flex flex-col items-center justify-center rounded border border-black/30">
                        <div className="relative w-20 h-20 flex items-center justify-center">
                            <img className="absolute" src={BackgroundIcon} alt="bg"/>
                            <img className="absolute" src={SaleIcon} alt={''}/>
                        </ div>
                        <p className="mt-6 mb-3 font-bold text-3xl leading-none text-black group-hover:text-zinc-50 tracking-[1.28px]">33k</p>
                        <p className="text-base font-normal text-black group-hover:text-zinc-50">Mopnthly Produduct
                            Sale</p>
                    </div>
                    <div
                        className="group hover:bg-buttons hover:shadow hover:border-none transition-all flex flex-col items-center w-[270px] h-[230px] flex flex-col items-center justify-center rounded border border-black/30">
                        <div className="relative w-20 h-20 flex items-center justify-center">
                            <img className="absolute" src={BackgroundIcon} alt="bg"/>
                            <img className="absolute" src={ShopingIcon} alt={''}/>
                        </ div>
                        <p className="mt-6 mb-3 font-bold text-3xl leading-none text-black group-hover:text-zinc-50 tracking-[1.28px]">45.5k</p>
                        <p className="text-base font-normal text-black group-hover:text-zinc-50">Customer active in our
                            site</p>
                    </div>
                    <div
                        className="group hover:bg-buttons hover:shadow hover:border-none transition-all flex flex-col items-center w-[270px] h-[230px] flex flex-col items-center justify-center rounded border border-black/30">
                        <div className="relative w-20 h-20 flex items-center justify-center">
                            <img className="absolute" src={BackgroundIcon} alt="bg"/>
                            <img className="absolute" src={DolalBagIcon} alt={''}/>
                        </ div>
                        <p className="mt-6 mb-3 font-bold text-3xl leading-none text-black group-hover:text-zinc-50 tracking-[1.28px]">25k</p>
                        <p className="text-base font-normal text-black group-hover:text-zinc-50">Anual gross sale in our
                            site</p>
                    </div>
                </div>
            </div>
            <div className={'mt-[140px]'}>
                <Swiper slidesPerView={3} spaceBetween={30} navigation={true} pagination={{
                    clickable: true,
                    renderBullet: function (_, className) {
                        return `<span class="${className} bg-zinc-50 w-3 h-3 rounded-full"></span>`;
                    }
                }}
                        autoplay={{delay: 10000, waitForTransition: true}}
                        modules={[Pagination, Autoplay, Navigation]}>
                    {
                        members.map((member, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className={'mb-10 w-[370px]'}>
                                            <div className={'bg-[#F5F5F5] h[430px] flex items-end justify-center'}>
                                                <img className={''} src={member.image} alt=""/>
                                            </div>
                                            <h1 className={'text-3xl mt-8 font-medium leading-none tracking-[1.38px]'}>{member.name}</h1>
                                            <p className={'text-base mt-2 font-normal text-black'}>{member.position}</p>
                                            <div className={'mt-4 flex gap-4'}>
                                                <a href={member.socials.facebook}>
                                                    <Facebook size={24}/>
                                                </a>
                                                <a href={member.socials.facebook}>
                                                    <Instagram size={24}/>
                                                </a>
                                                <a href={member.socials.facebook}>
                                                    <Linkedin size={24}/>
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                        )
                    }
                </Swiper>
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
};

export default About;