import * as React from 'react';
import s from './adminDeleteEdit.module.scss'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchGetPoems } from '../../redux/slices/poemSlice';
import { fetchGetArticles } from '../../redux/slices/articleSlice';
import { selectArticleData, selectPoemData } from '../../redux/selectors';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';


interface Props {
    componentName: string
}

export const ChangeData: React.FC<Props> = ({ componentName }) => {
    const dispatch = useCustomDispatch();
    const poems = useCustomSelector(selectPoemData);
    const articles = useCustomSelector(selectArticleData)
    const content = componentName === 'Изменить, удалить стих' ? poems : articles

    const lists = useSelector(state => state)
    // console.log(lists)

    React.useEffect(() => {
        dispatch(fetchGetPoems())
        dispatch(fetchGetArticles())
    }, [dispatch])

    // console.log(poems, 'poems')
    // console.log(articles, 'articles')

    // console.log(poems.data)
    console.log( content.isLoading, ' content.isLoading')

    return (
        <>{
            content.isLoading === 'loaded' ?
                <div className={s.data}>
                    <div className={s.data__content}>
                        <ul className={s.data__list}>
                            {
                                content.data.map((item: any) =>
                                    <div className={s.data__item_wrapp} key={item.title}>
                                        <li className={s.data__item}>{item.title || 'загрузка'}</li>
                                    </div>
                                )
                            }
                        </ul>
                        <div className={s.pagination}>
                            <div className={s.pagination__list}>
                                <ReactPaginate
                                    className={s.root}
                                    nextLabel=">"
                                    pageCount={4}
                                    previousLabel="<"
                                    renderOnZeroPageCount={null || undefined}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                :
                <h1>Загрузка</h1>
        }

        </>
    );
}