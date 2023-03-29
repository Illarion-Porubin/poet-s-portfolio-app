import React from 'react';
import ReactDOM from 'react-dom';
import s from './popupPoem.module.scss';
import poembg from '../../assets/png/poembg.png';
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';
import Back from '../../assets/svg/Back.svg';



const portal: any = document.getElementById(`popup_poem`);

interface Props {
    item: {
        id: string,
        name: string,
        content: string
    }
    display: boolean,
    hideContent: () => void
}


export const PopupPoem: React.FC<Props> = ({ item, hideContent, display }) => {
    return (
        ReactDOM.createPortal(
            !display ?
                <div className={s.popupPoem}>
                    <div className={s.popupPoem__wrapp}>
                        <img className={s.popupPoem__img} src={poembg} alt="poembg" />
                        <div className={s.popupPoem__box}>
                            <img className={s.popupPoem__btn} src={Back} alt="Back" onClick={hideContent} />
                            <h1 className={s.popupPoem__title}>{item.name}</h1>
                            <div className={s.popupPoem__content}>
                                <pre className={s.popupPoem__text}>{item.content}</pre>
                            </div>
                        </div>
                    </div>
                </div>
                : null,
            portal
        )
    )
}
