import React, { memo } from 'react';
import s from './articlesList.module.scss';
import { Creativity } from '../../types/types';


interface Props {
    items: Creativity
}

export const ArticlesList: React.FC<Props> = memo(({ items }) => {
    const [open, setOpen] = React.useState<boolean>(false)
    const data = items.createdAt ? new Date(items.createdAt).toLocaleString().slice(0, 5) : [0]
    const time = items.createdAt ? new Date(items.createdAt).toLocaleString().slice(12, 17) : [0]

    return (
        <>
            <li className={open ? `${s.articlesList} ${s.open}` : s.articlesList}>
                <div className={open ? s.articlesList__item_open : s.articlesList__item}>
                    <p className={s.articlesList__item_title}>{items.title}</p>
                    <pre className={open ? `${s.articlesList__item_text} ${s.open}` : s.articlesList__item_text}>{items.text}</pre>
                </div>
                <div className={s.articlesList__item_footer}>
                    <p className={s.articlesList__item_time}>{`${data} ${time}`}</p>
                    <button className={s.articlesList__item_btn} onClick={() => setOpen(prev => !prev)}>{open ? `Свернуть` : `Читать`}</button>
                </div>
            </li>
        </>
    )
})
