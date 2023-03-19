import React from 'react';
import { Icons } from "../../components/icons/icons"
import s from "./menu.module.scss";
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';


export const Menu: React.FC = () => {
  return (
    <>
      <div className={s.menu}>
        <div className="container">
          <div className={s.menu__wrapp}>
            <nav className={s.menu__nav}>
              <ul className={s.menu__list}>
                <li className={s.menu__list_li}>главная</li>
                <li className={s.menu__list_li}>обо <span>мне</span></li>
                <li className={s.menu__list_li}>контакты</li>
                <li className={s.menu__list_li}>стихи</li>
                <li className={s.menu__list_li}>статьи</li>
              </ul>
            </nav>
            <div className={s.menu__info}>
              <Icons />
              <div><GlobalSvgSelecotr id={`enter`} /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
