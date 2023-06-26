import * as React from 'react';
import s from './popup.module.scss';
import { useCustomDispatch } from '../../hooks/store';
import { fetchLogin } from "../../redux/slices/authSlice";
import { UserTypes } from "../../types/types";
import { Navigate } from "react-router-dom";
import blackCross from '../../assets/svg/black_cross.svg';

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
    auth: any
}

export const Auth: React.FC<Props> = ({ open, setOpen, auth }) => {
    const dispatch = useCustomDispatch();
    const [email, setEmail] = React.useState<string>('');
    const [pass, setPass] = React.useState<string>('');

    const login: any = async (e: any) => {
        e.preventDefault()
        const { payload } = await dispatch(fetchLogin({ email, password: pass }));
        const _payload = payload as UserTypes
        if (!payload) {
            return alert("Не удалось авторизоваться");
        }

        if (!_payload.user?.isActivated) {
            return alert("Пожалуйста, подтвердите аккаунт");
        }

        else {
            if (_payload.accessToken && "accessToken" in _payload) {
                window.localStorage.setItem('token', _payload.accessToken);
            }
        }
    };

    return (
        <>
            <div className={open ? `${s.popup} ${s.active}` : s.popup} onClick={() => setOpen(false)}>
                <form className={open ? `${s.popup__form} ${s.active}` : s.popup__form} onClick={e => e.stopPropagation()} onSubmit={(e) => login(e)}>
                    <img className={s.popup__cross} src={blackCross} alt="black cross" onClick={() => setOpen(false)} />
                    <h5 className={s.popup__title}>Авторизация</h5>
                    <input
                        className={s.popup__input}
                        type="email" placeholder='Login'
                        onChange={e => setEmail(e.target.value)}
                        value={email} />
                    <input
                        className={s.popup__input}
                        type="password" placeholder='Password'
                        onChange={e => setPass(e.target.value)}
                        value={pass} />
                    <button className={s.popup__btn}>войти</button>
                </form>
                {auth.isLoading === 'loaded' && auth.data?.user?.admin && open ?
                    <Navigate to='/admin' />
                    :
                    null
                }
            </div>
        </>
    )
}