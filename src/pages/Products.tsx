import ProductItem, { ProductItemProps } from "../components/ProductItem.tsx";
import { useEffect, useLayoutEffect, useState } from "react";
import Pagination from "../components/Pagination.tsx";
import { useSearchParams } from "react-router-dom";
import { getProductsByCategory } from "../services/product.ts";
import useUser from "../hooks/useUser.ts";

const Products = () => {
    const [products, setProducts] = useState<ProductItemProps[]>([]);
    const [title, setTitle] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const [favoriteList, setFavoriteList] = useState<string[]>([]);
    const {favoriteProducts} = useUser();

    useEffect(() => {
        setFavoriteList(favoriteProducts.map((item) => item.id));
    }, [favoriteProducts]);


    useLayoutEffect(() => {
        setTitle((searchParams.get('category') || 'All products'));
    }, []);

    useEffect(() => {
        (async () => {
            const result = await getProductsByCategory(title);
            if(result) {
                setProducts(result);
            }
        })()
    }, [title]);

    useEffect(() => {
        setSearchParams({category: title, page: page.toString()});
    }, [page, title]);

    return (
        <div className={'mt-20 mb-[140px]'}>
            <div className={'flex items-center gap-4'}>
                <div className={'w-5 h-10 rounded bg-buttons'}/>
                <p className={'text-3xl font-medium leading-none text-buttons'}>{title}</p>
            </div>
            <div className={'flex gap-x-[30px] flex-wrap gap-y-[60px] mt-[60px]'}>
                {
                    products.slice((page - 1) * 8, page * 8).map((item) => {
                        return <ProductItem key={item.id} {...item} iconButton={{
                            favorite: true
                        }} isFavorite={favoriteList.includes(item.id)}/>;
                    })
                }
            </div>
            <div className={'mt-[60px] flex items-center justify-center'}>
                <Pagination total={products.length} perPage={8} currentPage={page} onChange={page => setPage(page)}/>
            </div>
        </div>
    );
};
3

export default Products;