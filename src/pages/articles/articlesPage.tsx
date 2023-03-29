import React from 'react';
import s from './articlesPage.module.scss';
import { Menu } from '../../components/menu/menu';
import { Pagination } from '../../components/pagination/pagination';
import articles_bg from '../../assets/jpg/articles_bg.jpg';
import { ArticlesList } from '../../components/articlesList/articlesList';


const articles = [
    { id: '1232131', title: `Действия представителей оппозиции`, text: `Являясь всего лишь частью общей картины, стремящиеся вытеснить традиционное производство, нанотехнологии призваны к ответу. Принимая во внимание показатели успешности, понимание сути ресурсосберегающих...`, time: `08.03.2023` },
    { id: '1232132', title: `Действия представителей оппозиции`, text: `Являясь всего лишь частью общей картины, стремящиеся вытеснить традиционное производство, нанотехнологии призваны к ответу. Принимая во внимание показатели успешности, понимание сути ресурсосберегающих...`, time: `09.03.2023` },
    { id: '1232133', title: `Действия представителей оппозиции`, text: `Являясь всего лишь частью общей картины, стремящиеся вытеснить традиционное производство, нанотехнологии призваны к ответу. Принимая во внимание показатели успешности, понимание сути ресурсосберегающих...`, time: `10.03.2023` },
    { id: '1232134', title: `Действия представителей оппозиции`, text: `Являясь всего лишь частью общей картины, стремящиеся вытеснить традиционное производство, нанотехнологии призваны к ответу. Принимая во внимание показатели успешности, понимание сути ресурсосберегающих...`, time: `11.03.2023` },
    { id: '1232135', title: `Действия представителей оппозиции`, text: `Являясь всего лишь частью общей картины, стремящиеся вытеснить традиционное производство, нанотехнологии призваны к ответу. Принимая во внимание показатели успешности, понимание сути ресурсосберегающих...`, time: `12.03.2023` },
    { id: '1232136', title: `Действия представителей оппозиции`, text: `Являясь всего лишь частью общей картины, стремящиеся вытеснить традиционное производство, нанотехнологии призваны к ответу. Принимая во внимание показатели успешности, понимание сути ресурсосберегающих...`, time: `13.03.2023` },
]


export default function ArticlesPage() {
    const [filter, setFilter] = React.useState<boolean>(true)


    return (
        <section className={s.articles} style={{ backgroundImage: `url(${articles_bg})` }}>
            <Menu />
            <div className={s.articles__block}>
                <div className={s.articles__head}>
                    <p className={s.articles__head_text}>Мои мысли</p>
                    <button className={s.articles__head_filter} onClick={() => setFilter(filter => !filter)}>{filter ? `Новые` : `Старые`}</button>
                </div>
                <div className={s.articles__content_wrapp} >
                    <ul className={s.articles__content}>
                        {articles.map((items) => 
                            <ArticlesList items={items} />
                        )}
                    </ul>
                </div>
            </div>
            <Pagination />
        </section>
    )
}
