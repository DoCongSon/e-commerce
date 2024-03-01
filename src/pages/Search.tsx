import ProductItem, { ProductItemProps } from "../components/ProductItem.tsx";
import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useUser from "../hooks/useUser.ts";
import { handleErrors } from "../utils";
import { queryProductsByName } from "../services/product.ts";

const Search = () => {
    const [searchProducts, setSearchProducts] = useState<ProductItemProps[]>([]);
    const [title, setTitle] = useState<string>('');
    const [favoriteList, setFavoriteList] = useState<string[]>([]);
    const {favoriteProducts} = useUser();
    const {query} = useParams();

    useEffect(() => {
        setFavoriteList(favoriteProducts.map((item) => item.id));
    }, [favoriteProducts]);

    useLayoutEffect(() => {
        if(query) {
            (async () => {
                try {
                    const products = await queryProductsByName(query);
                    setSearchProducts(products);
                } catch (e) {
                    console.log(handleErrors(e));
                }
            })()
            setTitle(`Search for: ${query}`);
        } else {
            setTitle('');
        }
    }, [query]);

    return (
        <div className={'mt-20 mb-[140px]'}>
            <div className={'flex items-center gap-4'}>
                <div className={'w-5 h-10 rounded bg-buttons'}/>
                <p className={'text-3xl font-medium leading-none text-buttons'}>{title}</p>
            </div>
            <div className={'flex gap-x-[30px] flex-wrap gap-y-[60px] mt-[60px]'}>
                {
                    searchProducts.length > 0 && searchProducts.map((item) => {
                        return <ProductItem key={item.id} {...item} iconButton={{
                            favorite: true
                        }} isFavorite={favoriteList.includes(item.id)}/>;
                    })
                }
                {
                    searchProducts.length === 0 && (
                        <p className={'text-2xl font-normal leading-none text-black'}>No products found</p>
                    )
                }
            </div>
        </div>
    );
};

export default Search;