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
    const [size, setSize] = React.useState<string>('');
    const [notice, setnotice] = React.useState<boolean>(false);


    const popup = () => {
        if (notice) {
            return (
                <>
                    <div className={s.message}>
                        <div className={s.message__content}>
                            <p className={s.message__text}>Нажмите дважды, чтобы вернуться к списку стихов.</p>
                        </div>
                    </div>
                </>
            )
        }
    }


    const popupNontice = () => {
        setnotice(true)
        setTimeout(() => {
            setnotice(false)
        }, 2200)
    }

    return (
        ReactDOM.createPortal(
            !display ?
                <>
                    {
                        popup()
                    }

                    <div className={s.popupPoem} onDoubleClick={hideContent}>
                        <div className={s.popupPoem__wrapp}>
                            <div className={s.popupPoem__box}>
                                <div className={s.popupPoem__box_title}>
                                    <h1 className={s.popupPoem__title}>{item.title}</h1>
                                    <div className={s.popupPoem__title_size_block}>
                                        <p className={s.popupPoem__size}>{size ? size : 19}</p>
                                        <input
                                            className={s.popupPoem__title_range}
                                            type="range" min="11" max="27"
                                            value={size}
                                            onChange={e => setSize(e.target?.value)}
                                        />
                                    </div>
                                </div>
                                <div className={s.popupPoem__content} onClick={popupNontice}>
                                    {
                                        size ?
                                            <p style={{ fontSize: Number(size) }} className={s.popupPoem__text}>{item.text}</p>
                                            :
                                            <p className={s.popupPoem__text}>{item.text}</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                : null,
            portal
        )
    )
}
)