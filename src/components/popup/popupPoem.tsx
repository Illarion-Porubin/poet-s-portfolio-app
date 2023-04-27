import React from 'react';
import ReactDOM from 'react-dom';
import s from './popupPoem.module.scss';
import poembg from '../../assets/png/poembg.png';
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';
import Back from '../../assets/svg/Back.svg';



const portal: any = document.getElementById(`popup_poem`);

interface Props {
    item: {
        title: string,
        text: string
    }
    display: boolean,
    hideContent: () => void
}


export const PopupPoem: React.FC<Props> = ({ item, hideContent, display }) => {
    return (
        ReactDOM.createPortal(
            !display ?
                <div className={s.popupPoem} onClick={hideContent}>
                    <div className={s.popupPoem__bg}></div>
                    <div className={s.popupPoem__wrapp}>
                        <div className={s.popupPoem__box}>
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
