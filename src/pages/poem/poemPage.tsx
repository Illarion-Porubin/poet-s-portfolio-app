import React from 'react';
import s from './poemPage.module.scss';
import { Menu } from '../../components/menu/menu';
// import { PoemList } from '../../components/poemList/poemList';
import { Pagination } from '../../components/pagination/pagination';
import { PopupPoem } from '../../components/popup/popupPoem';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectPoemData } from '../../redux/selectors';
import { fetchGetPoems, fetchSearchPoems } from '../../redux/slices/poemSlice';
import { Copyright } from '../../components/copyright/copyright';
import useDebounce from '../../hooks/useDebounce';




export const PoemPage: React.FC = () => {
  const dispatch = useCustomDispatch()
  const [filterData, setFilterData] = React.useState<any>();
  const [display, setDisplay] = React.useState<boolean>(true);
  const [search, setSearch] = React.useState<string>('')
  const [id, setId] = React.useState<number>(0)
  const [page, setPage] = React.useState<number>(0)
  const debounce = useDebounce(search, 400)
  const poemState = useCustomSelector(selectPoemData);
  const renderItems = 24;
  const amontPages = poemState.data.length / renderItems;

  const hideContent = () => {
    setDisplay(prev => !prev)
  }

  const gentIndex = (value: any) => {
    setDisplay(prev => !prev)
    setId(value)
  }

  React.useEffect(() => {
    dispatch(fetchGetPoems())
    if(debounce) {
      dispatch(fetchSearchPoems(debounce));
    }
    else {
      dispatch(fetchGetPoems());
    }
  }, [dispatch, debounce]);


  React.useEffect(() => {
    setFilterData(
      poemState.data.filter((item: any, index: number) => {
        return (index >= page * renderItems) && (index < (page + 1) * renderItems);
      })
    );
  }, [dispatch, page, poemState.data]);

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
                value={search}
                placeholder='Поиск'
                onChange={e => setSearch(e.target.value)}
              />
              <button className={s.poem__search_btn}>поиск</button>
            </div>
          </div>
          {display ?
            <div className={s.poem__content}>
              <div className={s.poem__content_wrapp}>
                <ul className={s.poem__list}>
                  {
                    filterData ?
                      filterData.map((item: any, index: number) =>
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
            <PopupPoem item={poemState.data[id]} hideContent={hideContent} display={display} />
          }
        </div>
        <>
        {
          display ?
          <Pagination setPage={setPage} amontPages={amontPages}/>
          :
          <Copyright/>
        }
        </>
      </section>
    </>
  )
}
