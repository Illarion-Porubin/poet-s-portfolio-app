import * as React from 'react';
import s from './menu.module.scss';

interface Props {
    menuId: (value: string) => void
}

export const Menu: React.FC<Props> = ({ menuId }) => {
    const menu = [
        'Личная информация',
        'Главная страница',
        'Добавить стих',
        'Добавить статью',
        'Изменить или удалить стих',
        'Изменить или удалить статью',
    ]


    return (
        <>
            <div className={s.adminMenu}>
                <button className={s.adminMenu__exit}>Выход</button>
                <nav className={s.adminMenu__list}>
                    <ul className={s.adminMenu__content}>
                        {
                            menu.map((item) =>
                                <div
                                    onClick={() => menuId(item)}
                                    className={s.adminMenu__items}
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