import { useNavigate } from "react-router-dom";

interface CategoryItemProps {
    title: string;
    image: string;
    category: string;
}

const CategoryItem = (props: CategoryItemProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate({pathname: '/products', search: `?category=${props.category}&page=1`});
    }

    return (
        <div
            onClick={handleClick}
            className={'group py-6 w-[170px] flex flex-col items-center justify-center rounded border border-black/30 gap-4 cursor-pointer select-none hover:bg-buttons transition-all'}>
            <div className={'w-14 h-14'}>
                <img className={'w-full h-full'} src={props.image} alt=""/>
            </div>
            <p className={'font-normal text-base text-black '}>{props.title}</p>
        </div>
    );
};

export default CategoryItem;

export type { CategoryItemProps };