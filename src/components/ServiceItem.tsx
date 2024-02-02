import BackgroundIcon from '../assets/services-bg.svg';

interface ServiceItemProps {
    title: string;
    description: string;
    icon: string;
}

const ServiceItem = (props: ServiceItemProps) => {
    return (
        <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 flex items-center justify-center">
                <img className="absolute" src={BackgroundIcon} alt="bg"/>
                <img className="absolute" src={props.icon} alt={props.title}/>
            </ div>
            <p className="mt-6 font-semibold text-xl text-black">{props.title}</p>
            <p className="mt-2 text-sm font-normal">{props.description}</p>
        </div>
    );
};

export default ServiceItem;