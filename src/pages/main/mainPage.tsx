import React, { memo } from 'react';
import s from "./main.module.scss";
import bg from "../../assets/jpg/mainbg.jpg";
import face from "../../assets/png/face.png";
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';
import { Icons } from '../../components/icons/icons';
import { Link } from "react-router-dom";
import { AboutPage } from '../about/about';
import { ContactsPage } from '../contacts/contactsPage';
import { selectAuthData, selectContentData } from "../../redux/selectors";
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchGetContetn } from '../../redux/slices/contentSlice';
import { UploadWidget } from '../../components/Upload/UploadWidget';
import { Donate } from '../../components/popup/popupDonate';
import { Auth } from '../../components/popup/popupAuth';


export const MainPage: React.FC = memo(() => {
  const dispatch = useCustomDispatch();
  const [mobMenu, setMobMenu] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [donate, setDonate] = React.useState<boolean>(false);
  const auth = useCustomSelector(selectAuthData);
  const contentState = useCustomSelector(selectContentData)

  React.useEffect(() => {
    dispatch(fetchGetContetn());
  }, [dispatch]);

  return (
    <>
      <Auth open={open} setOpen={setOpen} auth={auth} />
      <Donate donate={donate} phone={contentState.data?.content?.main_phone} card={contentState.data?.content?.main_card} setDonate={setDonate} />

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
                      <Link to="/stories">рассказы</Link>
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
              <h1 className={s.main__title}>{contentState.data?.content?.main_title || `Стих - это частичка души автора, подаренная читателю...`}</h1>
              {
                contentState.isLoading === 'loaded'
                  ?
                  <button className={s.main__btn} onClick={() => setDonate(true)}>{contentState.data?.content?.main_btn}</button>
                  :
                  <button className={s.main__btn} onClick={() => setDonate(true)}>Поддержать моё творчество</button>
              }
            </div>
            <div className={s.main__info}>
              <div className={s.main__avatar}>
                <UploadWidget requestFrom={''} />
              </div>
              <div className={s.main__avatar_wrapp}>
                {
                  contentState.isLoading === 'loaded'
                    ?
                    <h2 className={s.main__introduction}>{`${contentState.data?.content?.main_firstName} ${contentState.data?.content?.main_lastName}`}</h2>
                    :
                    <h2 className={s.main__introduction}>{`Владимир Ароян`}</h2>
                }
                <div className={s.main__info_underline}></div>
              </div>
              {
                contentState.isLoading === 'loaded'
                  ?
                  <button className={s.main__info_btn} onClick={() => setDonate(true)}>{contentState.data?.content?.main_btn}</button>
                  :
                  <button className={s.main__info_btn} onClick={() => setDonate(true)}>Поддержать моё творчество</button>
              }
            </div>
          </div>
        </div>
      </section>
      <AboutPage />
      <ContactsPage />
    </>
  )
})
