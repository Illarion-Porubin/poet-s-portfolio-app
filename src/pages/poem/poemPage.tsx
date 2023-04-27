import React from 'react';
import s from './poemPage.module.scss';
import { Menu } from '../../components/menu/menu';
// import { PoemList } from '../../components/poemList/poemList';
import { Pagination } from '../../components/pagination/pagination';
import { PopupPoem } from '../../components/popup/popupPoem';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectPoemData } from '../../redux/selectors';
import { fetchGetPoems } from '../../redux/slices/poemSlice';




export const PoemPage: React.FC = () => {
  const dispath = useCustomDispatch()
  const poemState = useCustomSelector(selectPoemData)
  const [display, setDisplay] = React.useState<boolean>(true);
  const [id, setId] = React.useState<number>(0)

  console.log(poemState)

  const hideContent = () => {
    setDisplay(prev => !prev)
  }

  const gentIndex = (value: any) => {
    setDisplay(prev => !prev)
    setId(value)
  }

  React.useEffect(() => {
    dispath(fetchGetPoems())
  }, [dispath])

  return (
    <>
      <section className={s.poem}>
        <Menu />
        <div className={display ? s.poem__wrapp : s.poem__not_wrapp}>
          <div className={s.poem__head}>
            <h3 className={s.poem__title}>Cписок стихов</h3>
            <div className={s.poem__search}>
              <input
                className={s.poem__search_input} type="text"
              />
              <button className={s.poem__search_btn}>поиск</button>
            </div>
          </div>
          {display ?
            <div className={s.poem__content}>
              <div className={s.poem__content_wrapp}>
                <ul className={s.poem__list}>
                  {
                    poemState.isLoading === 'loaded' ?
                      poemState.data.poems.map((item: any, index: number) =>
                        <li
                          onClick={() => gentIndex(index)}
                          className={display ? s.poems : s.poems__none}
                          key={item.title}>
                          {item.title}
                        </li>
                      )
                      :
                      <h1>Загруза</h1>
                  }
                </ul>
              </div>
            </div>
            :
            <PopupPoem item={poemState.data.poems[id]} hideContent={hideContent} display={display} />
          }
        </div>
        <Pagination />
      </section>
    </>
  )
}
