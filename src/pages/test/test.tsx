import React from 'react';
import s from './test.module.scss';
import { Menu } from '../../components/menu/menu';

export default function Test() {
  return (
    <div className={s.test}>
      <Menu />
      <p className={s.test__title}>Test Page</p>
    </div>
  )
}
