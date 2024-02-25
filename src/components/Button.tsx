interface ButtonProps {
    text: string
    onClick: () => void
    size?: 'small' | 'large'
    type?: 'primary' | 'secondary'
    style?: string
}

const Button = (props: ButtonProps) => {
    let style = "transition-all font-medium bg-buttons py-4 px-12 rounded text-zinc-50 hover:bg-[#E07575]";
    if(props.size === 'small' && props.type !== 'secondary') {
        style = "transition-all font-medium bg-buttons py-[10px] px-12 rounded text-zinc-50 hover:bg-[#E07575]";
    }
    if(props.size === 'small' && props.type === 'secondary') {
        style = "transition-all font-medium py-[10px] px-12 rounded text-black border hover:text-[#7D8184]";
    }
    if(props.size !== 'small' && props.type === 'secondary') {
        style = "transition-all font-medium py-4 px-12 rounded text-black border hover:text-[#7D8184]";
    }
    return <button className={style + " select-none " + props.style}
                   onClick={props.onClick}>{props.text}</button>
}

export default Button