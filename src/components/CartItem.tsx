import NumberInput from "./NumberInput.tsx";
import { XCircle } from "lucide-react";

interface CartItemProps {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
    onCartRemove: (id: number) => void;
    onIncrease: (id: number) => void;
    onDecrease: (id: number) => void;
}

const CartItem = (props: CartItemProps) => {
    return (
        <div
            className={'select-none relative grid grid-cols-[500px_1fr_1fr_70px] h-[100px] items-center rounded px-10 py-6 bg-white shadow text-black font-normal text-base'}>
            <div className={'flex items-center gap-5'}>
                <div className={'w-14 h-14 flex items-center'}>
                    <img className={'w-full object-cover'} src={props.image}/>
                </div>
                <p>{props.name}</p>
            </div>
            <p>{props.price}</p>
            <NumberInput value={props.quantity} onUp={() => props.onIncrease(props.id)}
                         onDown={() => props.onDecrease(props.id)}/>
            <p>{props.quantity * props.price}</p>
            <div>
                <XCircle className={'absolute top-4 right-4 cursor-pointer text-buttons'} size={24}
                         onClick={() => props.onCartRemove(props.id)}/>
            </div>
        </div>
    );
};

export default CartItem;
export type { CartItemProps };