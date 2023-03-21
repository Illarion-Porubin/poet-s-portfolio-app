import React from 'react';
import s from "./icons.module.scss";
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';


export const Icons: React.FC = () => {
  return (
    <>
      <div className={s.icons}>
        <div className={s.icons__list}>
          <a className={s.icons__svg} href="/#main">
            <div ><GlobalSvgSelecotr id={`te`} /></div>
          </a>
          <a className={s.icons__svg} href="/#main">
            <div ><GlobalSvgSelecotr id={`tw`} /></div>
          </a>
          <a className={s.icons__svg} href="/#main">
            <div ><GlobalSvgSelecotr id={`vk`} /></div>
          </a>
          <a className={s.icons__svg} href="/#main">
            <div><GlobalSvgSelecotr id={`wa`} /></div>
          </a>
        </div>
      </div>
    </>
  )
}
