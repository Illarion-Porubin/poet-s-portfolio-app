import * as React from 'react';
import s from './popup.module.scss';
import money from '../../assets/png/YuMoney.png';
import blackCross from '../../assets/svg/black_cross.svg';

interface Props {
    donate: boolean | undefined;
    phone: string | undefined;
    card: string | undefined;
    setDonate: (value: boolean) => void | undefined;
}

export const Donate: React.FC<Props> = ({ phone, card, donate, setDonate }) => {

    return (
        <>
            <div className={s.donate}>
                <div className={donate ? `${s.popup} ${s.active}` : s.popup} onClick={() => setDonate(false)}>
                    <div className={donate ? `${s.popup__form} ${s.active}` : s.popup__form} onClick={e => e.stopPropagation()}>
                        <img className={s.popup__cross} src={blackCross} alt="black cross" onClick={() => setDonate(false)} />
                        <h5 className={`${s.popup__title}`}>Вы можете поддержать меня.</h5>
                        <div className={s.donate__content}>
                            <p className={`${s.donate__text}`}>По телефону:</p>
                            <input
                                className={`${s.popup__input} ${s.donate__input}`}
                                type="text" placeholder='Номер телефона'
                                readOnly={true}
                                defaultValue={phone}
                            />
                        </div>
                        <div className={s.donate__content}>
                            <p className={`${s.donate__text}`}>По карте:</p>
                            <input
                                className={`${s.popup__input} ${s.donate__input}`}
                                type="text" placeholder='Номер карты'
                                readOnly
                                defaultValue={card}
                            />
                        </div>
                        <button className={s.donate__btn}>
                            <a href="https://yoomoney.ru/to/4100112210842619">
                                <img className={s.donate__btn_img} src={money} alt="ЮMoney" />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}