import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { PaginationOptions } from "swiper/types";
import SlideItem from "./SlideItem.tsx";
import LogoApple from "../assets/logo-apple.png";
import Ip14 from "../assets/ip14.png";

const Slide = () => {
    const pagination: PaginationOptions = {
        clickable: true,
        renderBullet: function (_, className) {
            return `<span class="${className} bg-zinc-50 w-3 h-3 rounded-full"></span>`;
        }
    };

    return (
        <Swiper centeredSlides={true} navigation={true} pagination={pagination}
                autoplay={{delay: 15000, waitForTransition: true}}
                modules={[Pagination, Autoplay, Navigation]}>
            <SwiperSlide>
                <SlideItem photo={Ip14} logo={LogoApple} title={'Up to 10% off Voucher'} name={'iPhone 14 Series'}/>
            </SwiperSlide>
            <SwiperSlide>
                <SlideItem photo={Ip14} logo={LogoApple} title={'Up to 10% off Voucher'} name={'iPhone 14 Series'}/>
            </SwiperSlide>
            <SwiperSlide>
                <SlideItem photo={Ip14} logo={LogoApple} title={'Up to 10% off Voucher'} name={'iPhone 14 Series'}/>
            </SwiperSlide>
            <SwiperSlide>
                <SlideItem photo={Ip14} logo={LogoApple} title={'Up to 10% off Voucher'} name={'iPhone 14 Series'}/>
            </SwiperSlide>
            <SwiperSlide>
                <SlideItem photo={Ip14} logo={LogoApple} title={'Up to 10% off Voucher'} name={'iPhone 14 Series'}/>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slide;