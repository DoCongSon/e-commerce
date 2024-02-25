import ProductItem, { ProductItemProps } from "../components/ProductItem.tsx";
import { useEffect, useState } from "react";
import { productsList } from "../FakeData/products.ts";
import Pagination from "../components/Pagination.tsx";

const Products = () => {
    const [products, setProducts] = useState<ProductItemProps[]>([]);
    const [title, setTitle] = useState<string>('');
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        setTitle('All Products');
        setProducts(productsList);
    }, []);

    return (
        <div className={'mt-20 mb-[140px]'}>
            <div className={'flex items-center gap-4'}>
                <div className={'w-5 h-10 rounded bg-buttons'}/>
                <p className={'text-3xl font-medium leading-none text-buttons'}>{title}</p>
            </div>
            <div className={'flex gap-x-[30px] flex-wrap gap-y-[60px] mt-[60px]'}>
                {
                    products.map((item, index) => {
                        return <ProductItem key={index} {...item} iconButton={{
                            delete: true, onDelete: () => {
                            }
                        }}/>;
                    })
                }
            </div>
            <div className={'mt-[60px] flex items-center justify-center'}>
                <Pagination total={200} perPage={20} currentPage={page} onChange={page => setPage(page)}/>
            </div>
        </div>
    );
};
3

export default Products;