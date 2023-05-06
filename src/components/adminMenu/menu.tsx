import * as React from 'react';
import s from './menu.module.scss';
import { Link } from 'react-router-dom';

interface Props {
    menuId: (value: string) => void
}

export const Menu: React.FC<Props> = ({ menuId }) => {
    const [id, setId] = React.useState<number>(0)
    const menu = [
        'Личная информация',
        'Главная страница',
        'Добавить стих',
        'Добавить статью',
        'Изменить, удалить стих',
        'Изменить, удалить статью',
    ]

    const style = (index: number, item: string) => {
        setId(index)
        menuId(item)
    }

    return (
        <>
            <div className={s.adminMenu}>
                <button className={s.adminMenu__exit}>
                    <Link to="/">Выход</Link>
                </button>
                <nav className={s.adminMenu__list}>
                    <ul className={s.adminMenu__content}>
                        {
                            menu.map((item, index) =>
                                <div
                                    onClick={() => style(index, item)}
                                    className={index === id ? `${s.adminMenu__items} ${s.active}` : s.adminMenu__items}
                                    key={item}>
                                    {item}
                                </div>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </>
    );
}