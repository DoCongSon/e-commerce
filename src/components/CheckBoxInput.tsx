import CheckBoxOn from '../assets/CheckBox=On.svg';
import CheckBoxOff from '../assets/CheckBox=Off.svg';

interface CheckBoxInputProps {
    value: boolean;
    label?: string;
    onClick?: () => void;
}

const CheckBoxInput = (props: CheckBoxInputProps) => {
    return (<div className="select-none inline-flex items-center justify-center cursor-pointer" onClick={props.onClick}>
        <img src={props.value ? CheckBoxOn : CheckBoxOff} alt="checkbox-input"/>
        <p className={'ml-4 text-base font-normal'}>{props.label}</p>
    </div>)
}

export default CheckBoxInput;