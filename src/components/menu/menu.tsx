import React from 'react';
import s from "./menu.module.scss";
import { Icons } from "../../components/icons/icons"
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';
import { Link } from "react-router-dom";



export const Menu: React.FC = () => {

  return (
    <>
      <div className={s.menu}>
        <div className="container">
          <div className={s.menu__wrapp}>
            <nav className={s.menu__nav}>
              <ul className={s.menu__list}>
                <li className={s.menu__list_li}>
                  <Link to="/" >главная</Link>
                </li>
                <li className={s.menu__list_li}>
                  <Link to="/poem">cтихи</Link>
                </li>
                <li className={s.menu__list_li}>
                  <Link to="/poem">статьи</Link>
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
    </>
  )
}