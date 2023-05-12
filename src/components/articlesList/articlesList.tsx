import React from 'react'
import s from './articlesList.module.scss';


interface Props {
    items: {
        title: string,
        text: string,
        createdAt: any
    }
}

export const ArticlesList: React.FC<Props> = ({ items }) => {
    const [open, setOpen] = React.useState<boolean>(false)
    const time = new Date(items.createdAt).toISOString().slice(0, 10).split('-').reverse()

    return (
        <>
            <li className={open ? `${s.articlesList} ${s.open}` : s.articlesList}>
                <div className={open ? s.articlesList__item_open : s.articlesList__item}>
                    <p className={s.articlesList__item_title}>{items.title}</p>
                    <pre className={open ? `${s.articlesList__item_text} ${s.open}` : s.articlesList__item_text}>{items.text}</pre>
                </div>
                <div className={s.articlesList__item_footer}>
                    <p className={s.articlesList__item_time}>{time.join('.')}</p>
                    <button className={s.articlesList__item_btn} onClick={() => setOpen(prev => !prev)}>{open ? `Свернуть` : `Читать`}</button>
                </div>
            </li>
        </>
    )
}
