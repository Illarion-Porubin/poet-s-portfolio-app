import React from 'react';
import s from "./icons.module.scss";
import { GlobalSvgSelecotr } from '../../assets/global/GlobalSvgSelecotr';


export const Icons: React.FC = () => {
  return (
    <>
      <div className={s.icons}>
        <div className={s.icons__list}>
          <div className={s.icons__svg}><GlobalSvgSelecotr id={`te`} /></div>
          <div className={s.icons__svg}><GlobalSvgSelecotr id={`tw`} /></div>
          <div className={s.icons__svg}><GlobalSvgSelecotr id={`vk`} /></div>
          <div className={s.icons__svg}><GlobalSvgSelecotr id={`wa`} /></div>
        </div>
      </div>
    </>
  )
}
