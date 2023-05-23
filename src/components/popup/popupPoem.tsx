import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import { Creativity } from '../../types/types';
import s from './popupPoem.module.scss';


const portal: any = document.getElementById(`popup_poem`);

interface Props {
    item: Creativity,
    display: boolean,
    hideContent: () => void
}


export const PopupPoem: React.FC<Props> = memo(({ item, hideContent, display }) => {
    return (
        ReactDOM.createPortal(
            !display ?
                <div className={s.popupPoem} onClick={hideContent}>
                    <div className={s.popupPoem__wrapp}>
                        <div className={s.popupPoem__box}>
                            <h1 className={s.popupPoem__title}>{item.title}</h1>
                            <div className={s.popupPoem__content}>
                                <pre className={s.popupPoem__text}>{item.text}</pre>
                            </div>
                        </div>
                    </div>
                    <a className={s.popupPoem__thx_wrap} href="https://yoomoney.ru/to/4100112210842619">
                        <button className={s.popupPoem__thx}>Сказать спасибо</button>
                    </a>
                </div>
                : null,
            portal
        )
    )
}
)