import React from 'react'
import ReactPaginate from 'react-paginate';
import s from './pagintaion.module.scss';
interface Props {
    setPage: any,
    amontPages: any,
}

export const Pagination: React.FC<Props> = ({ setPage, amontPages}) => {

    return (
        <>
            <div className={s.pagination}>
                <div className="container">
                    <div className={s.pagination__list}>
                        <ReactPaginate
                            className={s.root}
                            previousLabel="<"
                            nextLabel=">"
                            onPageChange={(e: any) =>
                                setPage(e.selected)
                            }
                            pageCount={amontPages}
                            renderOnZeroPageCount={null || undefined}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}


