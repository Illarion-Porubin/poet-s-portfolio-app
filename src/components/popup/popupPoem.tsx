import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import { Creativity } from '../../types/types';
import coin from '../../assets/svg/coin-svgrepo-com.svg';
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
                <div className={s.popupPoem} >
                    <div className={s.popupPoem__bg} onClick={hideContent}></div>
                    <div className={s.popupPoem__wrapp}>
                        <div className={s.popupPoem__box}>
                            <a href="/#">
                                <img className={s.popupPoem__coin} src={coin} alt="coin" />
                            </a>
                            <h1 className={s.popupPoem__title}>{item.title}</h1>
                            <div className={s.popupPoem__content}>
                                <pre className={s.popupPoem__text}>{item.text}</pre>
                            </div>
                        </div>
                    </div>
                </div>
                : null,
            portal
        )
    )
}
)