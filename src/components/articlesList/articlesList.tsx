import React from 'react'
import s from './articlesList.module.scss';


interface Props {
    items: {
        title: string,
        text: string,
        time: string
    }
}

export const ArticlesList: React.FC<Props> = ({ items }) => {
    const [open, setOpen] = React.useState<boolean>(true)

    return (
        <>
            <li className={s.articlesList}>
                <div className={open ? s.articlesList__item : s.articlesList__item_open}>
                    <p className={s.articlesList__item_title}>{items.title}</p>
                    <p className={s.articlesList__item_text}>{items.text}</p>
                    <p className={s.articlesList__item_time}>{items.time}</p>
                    <button className={s.articlesList__item_btn} onClick={() => setOpen(prev => !prev)}>{open ? `Читать` : `Свернуть`}</button>
                </div>
            </li>
        </>
    )
}
