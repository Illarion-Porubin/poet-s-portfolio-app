import React, { memo } from "react";
import s from "./poemPage.module.scss";
import { Pagination } from "../../components/pagination/pagination";
import { PopupPoem } from "../../components/popup/popupPoem";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { selectPoemData } from "../../redux/selectors";
import { fetchGetPoems, fetchSearchPoems } from "../../redux/slices/poemSlice";
import { Copyright } from "../../components/copyright/copyright";
import useDebounce from "../../hooks/useDebounce";

export const PoemPage: React.FC = memo(() => {
  const dispatch = useCustomDispatch();
  const [display, setDisplay] = React.useState<boolean>(true);
  const [search, setSearch] = React.useState<string>("");
  const [id, setId] = React.useState<number>(0);
  const debounce = useDebounce(search, 400);
  const poemState = useCustomSelector(selectPoemData);

  const hideContent = () => {
    setDisplay((prev) => !prev);
  };

  const gentIndex = (value: any) => {
    setDisplay((prev) => !prev);
    setId(value);
  };

  React.useEffect(() => {
    if (debounce) {
      dispatch(fetchSearchPoems(debounce));
    } else {
      dispatch(fetchGetPoems());
    }
  }, [dispatch, debounce]);

  return (
    <>
      <section className={s.poem}>
        <div className={display ? s.poem__wrapp : s.poem__not_wrapp}>
          <div className={s.poem__head}>
            <h3 className={s.poem__title}>Cписок стихов</h3>
            <div className={s.poem__search}>
              <input
                className={s.poem__search_input}
                type="text"
                value={search}
                placeholder="Поиск"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className={s.poem__search_btn}>поиск</button>
            </div>
          </div>
          {display ? (
            <div className={s.poem__content}>
              <div className={s.poem__content_wrapp}>
                <ul className={s.poem__list}>
                  {poemState ? (
                    poemState.data.map((item: any, index: number) => (
                      <li
                        onClick={() => gentIndex(index)}
                        className={display ? s.poems : s.poems__none}
                        key={item.title}
                      >
                        {item.title}
                      </li>
                    ))
                  ) : (
                    <h1>Загруза</h1>
                  )}
                </ul>
              </div>
            </div>
          ) : (
            <PopupPoem
              item={poemState.data[id]}
              hideContent={hideContent}
              display={display}
            />
          )}
        </div>
        <>{display ? <Pagination /> : <Copyright />}</>
      </section>
    </>
  );
});
