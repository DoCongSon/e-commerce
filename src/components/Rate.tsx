import StarYellow from '../assets/star-yellow.svg';
import StarGray from '../assets/star-graysvg.svg';

interface RateProps {
    rate: 1 | 2 | 3 | 4 | 5;
    total: number;
}

const Rate = (props: RateProps) => {
    return (
        <div className={'flex gap-2 items-center'}>
            <div className={'flex'}>
                {Array.from({length: 5}, (_, i) => {
                    if(i < props.rate) {
                        return <img key={i} src={StarYellow}/>
                    } else {
                        return <img key={i} src={StarGray}/>
                    }
                })}
            </div>
            <p className={'text-sm leading-normal font-semibold text-black opacity-50'}>{`(${props.total})`}</p>
        </div>
    );
};

export default Rate;