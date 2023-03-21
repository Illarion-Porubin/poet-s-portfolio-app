import React from 'react';
import s from "./menu.module.scss";
import { Icons } from "../../components/icons/icons"
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';
import { Link } from "react-router-dom";



export const Menu: React.FC = () => {
  const [dopMenu, setDopMenu] = React.useState<boolean>(false)


  return (
    <>
      <div className={s.menu}>
        <div className="container">
          <div className={s.menu__wrapp}>
            <nav className={s.menu__nav}>
              <ul className={s.menu__list}>
                <li className={s.menu__list_li}
                  onClick={() => setDopMenu(true)}
                >
                  <Link to="/" >главная</Link>
                </li>
                {
                  dopMenu ?
                    <>
                      <li className={s.menu__list_li}>
                        <a href="/#about">обо <span>мне</span></a>
                      </li>
                      <li className={s.menu__list_li}>
                        <a href="/#contacts">контакты</a>
                      </li>
                    </>
                    : null
                }
                <li className={s.menu__list_li}>
                  <Link to="/test">Стихи</Link>
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








// <>
// <div className={s.menu}>
//   <div className="container">
//     <div className={s.menu__wrapp}>
//       <nav className={s.menu__nav}>
//         <ul className={s.menu__list}>
//           <li className={s.menu__list_li}>
//             <a href="#main">главная</a>
//           </li>
//           <li className={s.menu__list_li}>
//             <a href="#about">обо <span>мне</span></a>
//           </li>
//           <li className={s.menu__list_li}>
//             <a href="">контакты</a>
//           </li>
//           <li className={s.menu__list_li}>
//             <a href="">стихи</a>
//           </li>
//           <li className={s.menu__list_li}>
//             <a href="">статьи</a>
//           </li>
//         </ul>
//       </nav>
//       <div className={s.menu__info}>
//         <Icons />
//         <div><GlobalSvgSelecotr id={`enter`} /></div>
//       </div>
//     </div>
//   </div>
// </div>
// </>