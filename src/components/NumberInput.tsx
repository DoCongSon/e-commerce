import { ChevronDown, ChevronUp } from "lucide-react";

interface NumberInputProps {
    value: number;
    onUp: () => void;
    onDown: () => void;
}

const NumberInput = (props: NumberInputProps) => {
    return (
        <div
            className={'w-[72px] px-3 py-1.5 rounded border-2 inline-flex border-black/40 items-center justify-between'}>
            <p className={'font-normal leading-none text-base text-black'}>{props.value < 10 ? '0' + props.value : props.value}</p>
            <div>
                <ChevronUp className={'cursor-pointer'} size={16} onClick={props.onUp}/>
                <ChevronDown className={'cursor-pointer'} size={16} onClick={props.onDown}/>
            </div>
        </div>
    );
};

export default NumberInput;