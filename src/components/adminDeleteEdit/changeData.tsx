import React, { memo, useEffect } from "react";
import s from "./adminDeleteEdit.module.scss";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import {
  fetchDeletePoem,
  fetchGetPoems,
  fetchSearchPoems,
  poemSlice,
} from "../../redux/slices/poemSlice";
import {
  articleSlice,
  fetchDeleteArticle,
  fetchGetArticles,
  fetchSearchArticles,
} from "../../redux/slices/articleSlice";
import {
  selectArticleData,
  selectContentData,
  selectPoemData,
} from "../../redux/selectors";
import { GlobalSvgSelecotr } from "../../assets/global/GlobalSvgSelecotr";
import ReactPaginate from "react-paginate";
import useDebounce from "../../hooks/useDebounce";
import { Creativity } from "../../types/types";
import { contentSlice } from "../../redux/slices/contentSlice";

export const ChangeData: React.FC = memo(() => {
  const dispatch = useCustomDispatch();
  const contentState = useCustomSelector(selectContentData);
  const poems = useCustomSelector(selectPoemData);
  const articles = useCustomSelector(selectArticleData);
  const [search, setSearch] = React.useState<string>("");
  const debounce = useDebounce(search, 350);

  const creativity =
    contentState.category === "Изменить, удалить стих" ? poems : articles;

  const deleteItem = (id: string) => {
    if (contentState.category === "Изменить, удалить стих") {
      dispatch(fetchDeletePoem(id));
      dispatch(poemSlice.actions.deltePoem(id));
    } else {
      dispatch(fetchDeleteArticle(id));
      dispatch(articleSlice.actions.delteArticle(id));
    }
  };

  const updateData = (item: Creativity) => {
    if (contentState.category === "Изменить, удалить стих") {
      dispatch(contentSlice.actions.setCategory("Добавить стих"));
      dispatch(articleSlice.actions.setArticle(null));
      dispatch(poemSlice.actions.setPoem(item));
    } else {
      dispatch(contentSlice.actions.setCategory("Добавить статью"));
      dispatch(poemSlice.actions.setPoem(null));
      dispatch(articleSlice.actions.setArticle(item));
    }
  };

  const setPage = (page: number) => {
    if (contentState.category === "Изменить, удалить стих") {
      dispatch(fetchGetPoems(page));
    } else {
      dispatch(fetchGetArticles(page));
    }
  };

  useEffect(() => {
    if (debounce) {
      dispatch(fetchSearchPoems(debounce));
      dispatch(fetchSearchArticles(debounce));
    }
    else{
        dispatch(fetchGetArticles());
        dispatch(fetchGetPoems());
    }
  }, [contentState.category, debounce, dispatch]);

  return (
    <>
      {creativity.isLoading === "loaded" ? (
        <div className={s.data}>
          <div className={s.data__content}>
            <div className={s.data__content_search}>
              <input
                type="text"
                className={s.data__content_search_input}
                placeholder="Поиск"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <ul className={s.data__list}>
              {creativity.data.map((item: Creativity) => (
                <div className={s.data__item_wrapp} key={item.title}>
                  <li className={s.data__item} onClick={() => updateData(item)}>
                    {item.title || "загрузка"}
                  </li>
                  <div
                    className={s.data__delete}
                    onClick={() => deleteItem(item._id!)}
                  >
                    <GlobalSvgSelecotr id="cancel" />
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
      <div className={s.pagination}>
        <div className={s.pagination__list}>
          <ReactPaginate
            className={s.root}
            previousLabel="<"
            nextLabel=">"
            onPageChange={(e) => setPage(e.selected)}
            pageCount={creativity.pages}
            renderOnZeroPageCount={null || undefined}
          />
        </div>
      </div>
    </>
  );
});
