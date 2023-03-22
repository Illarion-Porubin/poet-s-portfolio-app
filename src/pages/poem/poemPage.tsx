import React from 'react';
import s from './poemPage.module.scss';
import poem_bg from '../../assets/jpg/poem_bg.jpg';
import { Menu } from '../../components/menu/menu';
import { PoemList } from '../../components/poemList/poemList';
import { Pagination } from '../../components/pagination/pagination';


const list = [
  { name: `название 1`, content: `содержание 1` },
  { name: `название 2`, content: `содержание 2` },
  { name: `название 3`, content: `содержание 3` },
  { name: `название 4`, content: `содержание 4` },
  { name: `название 5`, content: `содержание 5` },
  { name: `название 6`, content: `содержание 6` },
  { name: `название 7`, content: `содержание 7` },
  { name: `название 8`, content: `содержание 8` },
  { name: `название 8`, content: `содержание 8` },
  { name: `название 8`, content: `содержание 8` },
  { name: `название 8`, content: `содержание 8` },
  { name: `название 8`, content: `содержание 8` },
  { name: `название 8`, content: `содержание 8` },
  { name: `название 8`, content: `содержание 8` },
  { name: `название 8`, content: `содержание 8` },
  { name: `название 8`, content: `содержание 8` },
  { name: `название 8`, content: `содержание 8` },
  { name: `название 8`, content: `содержание 8` },
  { name: `название 8`, content: `содержание 8` },
  { name: `название 1`, content: `содержание 1` },
  { name: `название 2`, content: `содержание 2` },
  { name: `название 3`, content: `содержание 3` },
  { name: `название 4`, content: `содержание 4` },
  { name: `Очень и очень длинное название стиха`, content: `содержание 5` },
]


export const PoemPage = () => {
  return (
    <>

      <section className={s.poem} style={{ backgroundImage: `url(${poem_bg})` }}>
        <Menu />
        <div className='container'>
          <div className={s.poem__wrapp}>
            <div className={s.poem__head}>
              <h3 className={s.poem__title}>Cписок стихов</h3>
              <div className={s.poem__search}>
                {/* <img src="" alt="search" /> */}
                <input className={s.poem__search_input} type="text" />
                <button className={s.poem__search_btn}>поиск</button>
              </div>
            </div>
            <ul className={s.poem__list}>
              <div className={s.poem__content}>
                {list.map((item) =>
                  <PoemList item={item} />
                )}
              </div>
            </ul>
          </div>
        </div>
      </section>
      <Pagination />
    </>
  )
}
