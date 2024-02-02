import RadioOn from '../assets/Radio Button=On.svg';
import RadioOff from '../assets/Radio Button=Off.svg';
import { useState } from "react";

interface RadioInputProps {
    value: boolean;
    label?: string;
    onChange?: () => void;
}

const RadioInput = (props: RadioInputProps) => {
    const [value, setValue] = useState(props.value);
    const handleOnClick = () => {
        setValue(!value);
        props.onChange && props.onChange();
    }
    return (<div className="inline-flex items-center justify-center cursor-pointer" onClick={handleOnClick}>
        <img src={value ? RadioOn : RadioOff} alt="radio-input"/>
        <p className={'ml-4 text-base font-normal'}>{props.label}</p>
    </div>)
}

export default RadioInput;