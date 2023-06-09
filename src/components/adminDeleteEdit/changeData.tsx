import React, { memo } from 'react';
import s from './adminDeleteEdit.module.scss'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchDeletePoem, fetchGetPoems, fetchSearchPoems } from '../../redux/slices/poemSlice';
import { fetchDeleteArticle, fetchGetArticles, fetchSearchArticles } from '../../redux/slices/articleSlice';
import { selectArticleData, selectPoemData } from '../../redux/selectors';
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';
import ReactPaginate from 'react-paginate';
import useDebounce from '../../hooks/useDebounce';
import { Creativity } from '../../types/types';


interface Props {
    updateData: (_id: string | null | undefined, comonentName: string) => void,
    componentName: string
}

export const ChangeData: React.FC<Props> = memo(({ componentName, updateData }) => {
    const dispatch = useCustomDispatch();
    const poems = useCustomSelector(selectPoemData);
    const articles = useCustomSelector(selectArticleData);
    const [search, setSearch] = React.useState<string>('');
    const [page, setPage] = React.useState<number>(0);
    const [filterData, setFilterData] = React.useState<Creativity[]>();
    const debounce = useDebounce(search, 400);
    const renderItems = 24;
    const content = componentName === 'Изменить, удалить стих' ? poems : articles
    const amontPages = content.data.length / renderItems;

    const deleteItem = (_id: string | null | undefined, component: string) => {
        if (component === 'Изменить, удалить стих') {
            dispatch(fetchDeletePoem(_id ? _id : ''))
            setTimeout(() => {
                dispatch(fetchGetPoems())
            }, 200)
        }
        dispatch(fetchDeleteArticle(_id ? _id : ''))
        setTimeout(() => {
            dispatch(fetchGetArticles())
        }, 200)
    }

    React.useEffect(() => {
        dispatch(fetchGetPoems())
        dispatch(fetchGetArticles())
    }, [dispatch])

    React.useEffect(() => {
        if (debounce) {
            if (componentName === 'Изменить, удалить стих') {
                dispatch(fetchSearchPoems(debounce));
            }
            else if (componentName === 'Изменить, удалить статью') {
                dispatch(fetchSearchArticles(debounce));
            }
        }
        else {
            dispatch(fetchGetPoems())
            dispatch(fetchGetArticles())
        }
    }, [dispatch, debounce, componentName]);


    React.useEffect(() => {
        if (content.data) {
            setFilterData(
                content.data.filter((_: Creativity, index: number) => {
                    return (index >= page * renderItems) && (index < (page + 1) * renderItems);
                })
            );
        }
    }, [dispatch, page, content.data]);
    
    return (
        <>{
            filterData ?
                <div className={s.data}>
                    <div className={s.data__content}>
                        <div className={s.data__content_search}>
                            <input type="text"
                                className={s.data__content_search_input}
                                placeholder='Поиск'
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </div>
                        <ul className={s.data__list}>
                            {
                                filterData.map((item: Creativity) =>
                                    <div className={s.data__item_wrapp} key={item.title}>
                                        <li className={s.data__item} onClick={() => updateData(item._id, componentName)}>{item.title || 'загрузка'}</li>
                                        <div className={s.data__delete} onClick={() => deleteItem(item._id, componentName)}><GlobalSvgSelecotr id='cancel' /></div>
                                    </div>
                                )
                            }
                        </ul>
                    </div>
                    <div className={s.pagination}>
                        <div className={s.pagination__list}>
                            <ReactPaginate
                                className={s.root}
                                previousLabel="<"
                                nextLabel=">"
                                pageCount={Math.ceil(amontPages)}
                                onPageChange={(e) =>
                                    setPage(e.selected)
                                }
                                renderOnZeroPageCount={null || undefined}
                            />
                        </div>
                    </div>
                </div>

                :
                null
        }

        </>
    );
})