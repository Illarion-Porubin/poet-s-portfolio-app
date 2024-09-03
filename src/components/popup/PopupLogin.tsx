import * as React from 'react';
import s from './popup.module.scss';
import { useCustomDispatch } from '../../hooks/store';
import { fetchLogin } from "../../redux/slices/authSlice";
import { IAdmin } from "../../types/types";
import blackCross from '../../assets/svg/black_cross.svg';

interface Props {
    selector: boolean;
    setOpen: (value: boolean) => void;
    setSelector: (value: boolean) => void;
}

export const PopupLogin: React.FC<Props> = ({setOpen, setSelector, selector}) => {
    const dispatch = useCustomDispatch();
    const [email, setEmail] = React.useState<string>('user2@mail.ru');
    const [pass, setPass] = React.useState<string>('123456');

    const login: any = async (e: any) => {
        e.preventDefault()
        const { payload } = await dispatch(fetchLogin({ email, password: pass }));
        const _payload = payload as IAdmin
        
        if (!payload) {
            return alert("Не удалось авторизоваться");
        }

        if (!_payload.user?.isActivated) {
            return alert("Пожалуйста, подтвердите аккаунт");
        }

        else {
            if (_payload.accessToken && "accessToken" in _payload) {
                window.localStorage.setItem('token', _payload.accessToken)
                window.location.replace('/admin')
            }
        }
    };

    return (
        <>
            <div className={`${s.popup} ${s.active}`} 
            // onClick={() => setOpen(false)}
            >
                <form className={`${s.popup__form} ${s.active}` } onSubmit={(e) => login(e)}
                >
                    <img className={s.popup__cross} src={blackCross} alt="black cross" onClick={() => setOpen(false)} />
                    <h5 className={s.popup__title}>Авторизация</h5>
                    <input
                        className={s.popup__input}
                        type="email" placeholder='Email'
                        onChange={e => setEmail(e.target.value)}
                        value={email} />
                    <input
                        className={s.popup__input}
                        type="password" placeholder='Password'
                        onChange={e => setPass(e.target.value)}
                        value={pass} />
                    <button className={s.popup__btn}>войти</button>
                </form>
                    <button className={s.popup__auth_btn} onClick={() => setSelector(!selector)} >Регистрация</button>
            </div> 
        </>
    )
}