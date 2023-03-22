import React from 'react';
import s from './poemList.module.scss';

interface Props {
  item: {
    name: string,
    content: string
  }
}


export const PoemList: React.FC<Props> = ({ item }) => {
  return (
    <div className={s.list}>
      <li
        className={s.poems}
        key={item.name}>
        {item.name}
      </li>
    </div>
  )
}
