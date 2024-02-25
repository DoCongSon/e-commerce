import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    total: number,
    perPage: number,
    currentPage: number,
    onChange: (page: number) => void
}

const Pagination = (props: PaginationProps) => {

    const pages = Array.from({length: Math.ceil(props.total / props.perPage)}, (_, index) => index + 1);
    const displayPages = props.currentPage < 4 ? pages.slice(0, 5) : props.currentPage > pages.length - 3 ? pages.slice(-5) : pages.slice(props.currentPage - 3, props.currentPage + 2);

    return (
        <div className={'flex items-center gap-4'}>
            <button
                onClick={() => {
                    if(props.currentPage > 1) props.onChange(props.currentPage - 1)
                }}
                className={'w-10 h-10 rounded flex items-center justify-center bg-white text-black border border-black/50'}>
                <ChevronLeft/>
            </button>
            {
                displayPages.map((pages) => {
                    return (
                        <button
                            key={pages}
                            onClick={() => props.onChange(pages)}
                            className={`w-10 h-10 rounded flex items-center justify-center ${props.currentPage === pages ? 'bg-buttons text-white' : 'bg-white text-black border border-black/50'}`}>
                            {pages}
                        </button>
                    )
                })
            }
            <button
                onClick={() => {
                    if(props.currentPage < pages.length) props.onChange(props.currentPage + 1)
                }}
                className={'w-10 h-10 rounded flex items-center justify-center bg-white text-black border border-black/50'}>
                <ChevronRight/>
            </button>
        </div>
    );
};

export default Pagination;