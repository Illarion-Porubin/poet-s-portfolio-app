import React, { memo } from 'react';
import ReactPaginate from 'react-paginate';
import s from './pagintaion.module.scss';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectPoemData } from '../../redux/selectors';
import { fetchGetPoems } from '../../redux/slices/poemSlice';


export const Pagination: React.FC = memo(() => {
    const pooemState = useCustomSelector(selectPoemData);
    const dispatch = useCustomDispatch();

    const changePage = (page: number) => {
        dispatch(fetchGetPoems(page))
    }

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
                                changePage(e.selected)
                            }
                            pageCount={pooemState.pages}
                            renderOnZeroPageCount={null || undefined}
                        />
                    </div>
                </div>
            </div>
        </>
    )
})


