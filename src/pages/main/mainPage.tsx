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
  return (
    <>
      <section className={s.main} id='main' style={{ backgroundImage: `url(${bg})` }}>
        <div className={s.menu}>
          <div className="container">
            <div className={s.menu__wrapp}>
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
              <div className={s.menu__info}>
                <Icons />
                <a href="/#main">
                  <div><GlobalSvgSelecotr id={`enter`} /></div>
                </a>
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
            </div>
          </div>
        </div>
      </section>
      <AboutPage />
      <ContactsPage />
    </>
  )
}
