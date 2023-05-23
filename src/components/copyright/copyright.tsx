import React, { memo } from 'react';
import s from './copyright.module.scss';

export const Copyright: React.FC = memo(() => {
    return (
        <>
            <div className={s.copyright}>
                <div className={s.copyright__text}>
                    <h3>За копированием и публикацией контента обращайтесь к автору.</h3>
                    <p>©Владир Ароян, все права защищены</p>
                </div>
            </div>
        </>
    )
})

