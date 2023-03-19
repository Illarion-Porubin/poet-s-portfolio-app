import React from 'react';
import s from "./main.module.scss";
import bg from "../../assets/jpg/mainbg.jpg";
import face from "../../assets/png/face.png";
import { Menu } from "../../components/menu/menu";
import avatar from "../../assets/png/avatar.png";
import About from '../about/about';

export const MainPage: React.FC = () => {
  return (
    <>
      <section className={s.main} style={{ backgroundImage: `url(${bg})` }}>
        <Menu />
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
      <About/>
    </>
  )
}
