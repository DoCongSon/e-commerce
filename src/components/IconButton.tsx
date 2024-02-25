import type { ForwardRefExoticComponent } from "react";
import type { LucideProps } from "lucide-react";

interface IconButtonProps {
    icon: ForwardRefExoticComponent<LucideProps>;
    color?: string;
    size?: 16 | 24 | 32;
    type?: "primary" | "secondary";
    onClick?: () => void;
}

const IconButton = (props: IconButtonProps) => {
    let styles = "inline-flex items-center justify-center text-black cursor-pointer rounded-full hover:text-buttons";
    let size = props.size;
    if(props.type === "primary") {
        size = 24;
        styles = "w-10 h-10 inline-flex items-center justify-center text-white inline-block p-1 cursor-pointer rounded-full bg-buttons hover:opacity-80";
    }

    return (
        <div className={styles} onClick={props.onClick}>
            <props.icon size={size} color={props.color}/>
        </div>
    )
}

export default IconButton;