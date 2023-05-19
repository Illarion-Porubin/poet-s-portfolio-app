import React, { memo } from 'react';
import s from "./menu.module.scss";
import { Icons } from "../../components/icons/icons"
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';
import { Link, Navigate } from "react-router-dom";
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectAuthData } from '../../redux/selectors';
import { fetchGetContetn } from '../../redux/slices/contentSlice';
import { fetchLogin } from '../../redux/slices/authSlice';
import { UserTypes } from '../../types/types';



export const Menu: React.FC = memo(() => {
  const dispatch = useCustomDispatch();
  const [mobMenu, setMobMenu] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>('vladimiraroyan.base@gmail.com');
  const [pass, setPass] = React.useState<string>('123456');
  const auth = useCustomSelector(selectAuthData);


  React.useEffect(() => {
    dispatch(fetchGetContetn());
  }, [dispatch]);

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
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


      <div className={s.menu}>
        <div className="container">
          <div className={s.menu__wrapp}>
            <div className={mobMenu ? `${s.menu__content} ${s.menu__content_active}` : s.menu__content}>
              <nav className={s.menu__nav}>
                <ul className={s.menu__list}>
                  <li className={s.menu__list_li}>
                    <Link to="/">главная</Link>
                  </li>
                  <li className={s.menu__list_li}>
                    <Link to="/poem">стихи</Link>
                  </li>
                  <li className={s.menu__list_li}>
                    <Link to="/articles">рассказы</Link>
                  </li>
                </ul>
              </nav>
              <Icons />
            </div>
            <div className={s.menu__info}>
            <div className={s.menu__enter} onClick={() => setOpen(prev => !prev)}><GlobalSvgSelecotr id={`enter`} /></div>
                <button className={mobMenu ? s.menu__mob_btn__active : s.menu__mob_btn}
                  onClick={() => setMobMenu(prev => !prev)}
                ></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
})