import React from 'react';
import s from "./menu.module.scss";
import { Icons } from "../../components/icons/icons"
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';
import { Link } from "react-router-dom";



export const Menu: React.FC = () => {
  const [mobMenu, setMobMenu] = React.useState<boolean>(false)


  return (
    <>
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
                    <Link to="/articles">статьи</Link>
                  </li>
                </ul>
              </nav>
              <Icons />
            </div>
            <div className={s.menu__info}>
              <a className={s.menu__enter_btn} href="/#main">
                <div><GlobalSvgSelecotr id={`enter`} /></div>
              </a>
              <button className={mobMenu ? s.menu__mob_btn__active : s.menu__mob_btn}
                onClick={() => setMobMenu(prev => !prev)}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}