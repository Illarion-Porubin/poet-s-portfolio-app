import React from 'react';
import s from "./main.module.scss";
import bg from "../../assets/jpg/mainbg.jpg";
import face from "../../assets/png/face.png";
import avatar from "../../assets/png/avatar.png";
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';
import { Icons } from '../../components/icons/icons';
import { Link } from "react-router-dom";
import { AboutPage } from '../about/about';
import { ContactsPage } from '../contacts/contactsPage';


export const MainPage: React.FC = () => {
  const [mobMenu, setMobMenu] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>('');
  const [pass, setPass] = React.useState<string>('');

  return (
    <>
      <div className={open ? `${s.popup} ${s.active}` : s.popup} onClick={() => setOpen(false)}>
        <form className={open ? `${s.popup__form} ${s.active}` : s.popup__form} onClick={e => e.stopPropagation()}>
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
          <Link to="/admin">
            <button className={s.popup__btn}>войти</button>
          </Link>
        </form>
      </div>
      
      <section className={s.main} id='main' style={{ backgroundImage: `url(${bg})` }}>
        <div className={s.menu}>
          <div className="container">
            <div className={s.menu__wrapp}>
              <div className={mobMenu ? `${s.menu__content} ${s.menu__content_active}` : s.menu__content}>
                <nav className={s.menu__nav}>
                  <ul className={s.menu__list}>
                    <li className={s.menu__list_li}>
                      <a href="/#main" >главная</a>
                    </li>
                    <li className={s.menu__list_li}>
                      <a href="/#about">обо <span>мне</span></a>
                    </li>
                    <li className={s.menu__list_li}>
                      <a href="/#contacts">контакты</a>
                    </li>
                    <li className={s.menu__list_li}>
                      <Link to="/poem">стихи</Link>
                    </li>
                    <li className={s.menu__list_li}>
                      <Link to="/articles">статьи</Link>
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
        <img className={s.face} src={face} alt="face" />
        <div className="container">
          <div className={s.main__wrapp}>
            <div className={s.main__preface}>
              <h1 className={s.main__title}>Стих - это частичка души автора, подаренная читателю...</h1>
              <button className={s.main__btn}>Сказать спасибо</button>
            </div>
            <div className={s.main__info}>
              <img className={s.main__avatar} src={avatar} alt="avatar" />
              <div className={s.main__avatar_wrapp}>
                <h2 className={s.main__introduction}>Имя Фамилия</h2>
                <div className={s.main__info_underline}></div>
              </div>
              <button className={s.main__info_btn}>Сказать спасибо</button>
            </div>
          </div>
        </div>
      </section>
      <AboutPage />
      <ContactsPage />
    </>
  )
}
