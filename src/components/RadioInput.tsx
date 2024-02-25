import RadioOn from '../assets/Radio Button=On.svg';
import RadioOff from '../assets/Radio Button=Off.svg';

interface RadioInputProps {
    value: boolean;
    label?: string;
    onClick?: () => void;
}

const RadioInput = (props: RadioInputProps) => {
    return (<div className="inline-flex items-center justify-center cursor-pointer" onClick={props.onClick}>
        <img src={props.value ? RadioOn : RadioOff} alt="radio-input"/>
        <p className={'ml-4 text-base font-normal'}>{props.label}</p>
    </div>)
}

export default RadioInput;