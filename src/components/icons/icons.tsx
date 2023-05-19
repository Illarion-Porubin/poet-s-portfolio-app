import React, { memo } from 'react';
import s from "./icons.module.scss";
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';


export const Icons: React.FC = memo(() => {
  return (
    <>
      <div className={s.icons}>
        <div className={s.icons__list}>
          <a className={s.icons__svg} href="/#main">
            <div ><GlobalSvgSelecotr id={`te`} /></div>
          </a>
          <a className={s.icons__svg} href="https://ok.ru/profile/577208613451?utm_campaign=android_share&utm_content=profile">
            <div ><GlobalSvgSelecotr id={`tw`} /></div>
          </a>
          <a className={s.icons__svg} href="https://vk.com/idval1209">
            <div ><GlobalSvgSelecotr id={`vk`} /></div>
          </a>
          <a className={s.icons__svg} href="https://wa.me/qr/PUO74YME7YT7E1">
            <div><GlobalSvgSelecotr id={`wa`} /></div>
          </a>
        </div>
      </div>
    </>
  )
})
