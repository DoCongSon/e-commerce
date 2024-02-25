import { ArrowRight } from "lucide-react";

interface SlideItemProps {
    logo: string;
    name: string;
    title: string;
    photo: string;
}

const SlideItem = (props: SlideItemProps) => {
    return (
        <div className={'bg-black flex gap-10 items-center justify-center px-16 py-4 w-full h-[344px]'}>
            <div className={'flex flex-col gap-6'}>
                <div className={'flex items-center gap-6'}>
                    <div className={'w-10'}>
                        <img src={props.logo}/>
                    </div>
                    <p className={'font-normal text-base text-zinc-50'}>{props.name}</p>
                </div>
                <p className={'max-w-[350px] font-primary font-semibold text-5xl leading-tight tracking-[1.92px] text-zinc-50'}>{props.title}</p>
                <div className={'flex gap-2 items-center'}>
                    <p className={'font-medium text-base text-zinc-50 border-b'}>Shop Now</p>
                    <ArrowRight size={24} color={'#FAFAFA'}/>
                </div>
            </div>
            <div className={'w-[500px]'}>
                <img src={props.photo}/>
            </div>
        </div>
    );
};

export default SlideItem;