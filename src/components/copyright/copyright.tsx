import * as React from 'react';
import s from './copyright.module.scss';

export const Copyright: React.FC = () => {
    return (
        <>
            <div className={s.copyright}>
                <div className={s.copyright__text}>
                    <h3>За копированием и публикацией контента обращайтесь к автору.</h3>
                    <p>©Все права защищены</p>
                </div>
            </div>
        </>
    )
}

