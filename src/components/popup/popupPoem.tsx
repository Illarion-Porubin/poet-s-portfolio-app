import React from 'react';
import ReactDOM from 'react-dom';
import s from './popupPoem.module.scss';
import poembg from '../../assets/png/poembg.png';



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
                            <button className={s.popupPoem__btn} onClick={hideContent}>назад</button>
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