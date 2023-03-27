import React from 'react';
import s from './poemList.module.scss';

interface Props {
  items: {
    name: string,
    content: string,
    id: string,
  }
  index: number
  display: boolean,
  gentIndex: any,
}

export const PoemList: React.FC<Props> = ({ items, gentIndex, display, index }) => {

  return (
    <>
      <li
        onClick={() => gentIndex(index)}
        className={display ? s.poems : s.poems__none}
        key={items.name}>
        {items.name}
      </li>
    </>
  )
}
