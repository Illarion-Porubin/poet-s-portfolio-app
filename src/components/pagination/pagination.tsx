import React from 'react'
import ReactPaginate from 'react-paginate';
import s from './pagintaion.module.scss';


export const Pagination: React.FC = () => {
    return (
        <>
            <div className={s.pagination}>
                <div className="container">
                    <div className={s.pagination__list}>
                        <ReactPaginate
                            className={s.root}
                            nextLabel=">"
                            // onPageChange={1}
                            pageCount={4}
                            previousLabel="<"
                            renderOnZeroPageCount={null || undefined}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}


