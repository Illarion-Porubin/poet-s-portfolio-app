import React, { memo } from 'react';
import ReactPaginate from 'react-paginate';
import s from './pagintaion.module.scss';

interface Props {
    setPage: (num: number) => void,
    amontPages: number,
}

export const Pagination: React.FC<Props> = memo(({ setPage, amontPages}) => {

    return (
        <>
            <div className={s.pagination}>
                <div className="container">
                    <div className={s.pagination__list}>
                        <ReactPaginate
                            className={s.root}
                            previousLabel="<"
                            nextLabel=">"
                            onPageChange={(e) =>
                                setPage(e.selected)
                            }
                            pageCount={Math.ceil(amontPages)}
                            renderOnZeroPageCount={null || undefined}
                        />
                    </div>
                </div>
            </div>
        </>
    )
})


