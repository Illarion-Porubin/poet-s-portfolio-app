import React, { memo } from 'react';
import s from "./main.module.scss";
import bg from "../../assets/jpg/mainbg.jpg";
import face from "../../assets/png/face.png";
import { AboutPage } from '../about/about';
import { ContactsPage } from '../contacts/contactsPage';
import { selectContentData } from "../../redux/selectors";
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchGetContetn } from '../../redux/slices/contentSlice';
// import { UploadWidget } from '../../components/Upload/UploadWidget';
import { Donate } from '../../components/popup/popupDonate';

export const MainPage: React.FC = memo(() => {
  const dispatch = useCustomDispatch();
  const [donate, setDonate] = React.useState<boolean>(false);
  const contentState = useCustomSelector(selectContentData);

  const checkName = contentState.data?.firstName ? 
  `${contentState.data?.firstName} ${contentState.data?.lastName}` :  'Имя Фамилия';

  React.useEffect(() => {
    dispatch(fetchGetContetn());
  }, [dispatch]);

  return (
    <>
      <Donate donate={donate} phone={contentState.data?.phone} card={contentState.data?.card} setDonate={setDonate} />

      <section className={s.main} id='main' style={{ backgroundImage: `url(${bg})` }}>
        <img className={s.face} src={face} alt="face" />
        <div className="container">
          <div className={s.main__wrapp}>
            <div className={s.main__preface}>
              <h1 className={s.main__title}>{contentState.data?.title || `Стих - это частичка души автора, подаренная читателю...`}</h1>
              <button className={s.main__btn} onClick={() => setDonate(true)}>{contentState.data?.btn || "Поддержать моё творчество"}</button>
            </div>
            <div className={s.main__info}>
              <div className={s.main__avatar}>
                {/* <UploadWidget requestFrom={''} /> */}
              </div>
              <div className={s.main__avatar_wrapp}>
                { 
                  contentState.isLoading === 'loaded'
                    ?
                    <h2 className={s.main__introduction}>{checkName}</h2>
                    :
                    <h2 className={s.main__introduction}>{`Имя Фамилия`}</h2>
                }
                <div className={s.main__info_underline}></div>
              </div>
              <button className={s.main__info_btn} onClick={() => setDonate(true)}>{contentState.data?.btn || "Поддержать моё творчество"}</button>
            </div>
          </div>
        </div>
      </section>
      <AboutPage />
      <ContactsPage />
    </>
  )
})
