import React from 'react';
import s from './articlesPage.module.scss';
import { Menu } from '../../components/menu/menu';
import { ArticlesList } from '../../components/articlesList/articlesList';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectArticleData } from '../../redux/selectors';
import { fetchSortArticles } from '../../redux/slices/articleSlice';
import articles_bg from '../../assets/jpg/articles_bg.jpg';


export default function ArticlesPage() {
    const [filter, setFilter] = React.useState<boolean>(false)
    const dispatch = useCustomDispatch()
    const state = useCustomSelector(selectArticleData)


    React.useEffect(() => {
        dispatch(fetchSortArticles('less')) /// new and old
    }, [dispatch])

    const sort = () => {
        dispatch(fetchSortArticles(filter ? 'less' : 'more'))
        setFilter(filter => !filter)
    }

    return (
        <section className={s.articles} style={{ backgroundImage: `url(${articles_bg})` }}>
            <Menu />
            <div className={s.articles__block}>
                <div className={s.articles__head}>
                    <p className={s.articles__head_text}>Мои мысли</p>
                    <button className={s.articles__head_filter} onClick={sort}>{filter ? `Старые` : `Новые`}</button>
                </div>
                <div className={s.articles__content_wrapp} >
                    <ul className={s.articles__content}>
                        {
                            state.isLoading === 'loaded' ?
                                state.data?.map((items: any) =>
                                    <ArticlesList items={items} key={items.title} />
                                )
                                : <h1>Загрузка</h1>
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
