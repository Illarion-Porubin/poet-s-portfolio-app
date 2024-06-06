import React, { memo } from "react";
import s from "./add.module.scss";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";
import { GlobalSvgSelecotr } from "../../assets/global/GlobalSvgSelecotr";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import {
  selectArticleData,
  selectContentData,
  selectPoemData,
} from "../../redux/selectors";
import { poemSlice } from "../../redux/slices/poemSlice";
import { articleSlice } from "../../redux/slices/articleSlice";
import { Creativity } from "../../types/types";

export const AddCreativity: React.FC = memo(() => {
  const dispatch = useCustomDispatch();
  const contentState = useCustomSelector(selectContentData);
  const articleState = useCustomSelector(selectArticleData);
  const poemState = useCustomSelector(selectPoemData);
  const [active, setActive] = React.useState<boolean>(false);
  const [creativity, setCreativity] = React.useState<Creativity>({
    title: "",
    text: "",
  });

  const completed = () => {
    if (contentState.category === "Добавить статью") {
      setActive(true);
      return dispatch(articleSlice.actions.setArticle({ ...creativity }));
    }
    setActive(true);
    dispatch(poemSlice.actions.setPoem({ ...creativity }));
  };

  const reset = () => {
    if (contentState.category === "Добавить статью") {
      setCreativity({ title: "", text: "" });
      setActive(false);
      dispatch(articleSlice.actions.setArticle(null));
    } else {
      setCreativity({ title: "", text: "" });
      setActive(false);
      dispatch(poemSlice.actions.setPoem(null));
    }
  };

  React.useEffect(() => {
    if (articleState.article && contentState.category === "Добавить статью") {
      setCreativity(articleState.article);
    } else if (poemState.poem && contentState.category === "Добавить стих") {
      setCreativity(poemState.poem);
    } else {
      setCreativity({ title: "", text: "" });
      setActive(false);
    }
  }, [articleState.article, contentState.category, poemState.poem]);

  return (
    <>
      <div className={s.description}>
        <div className={s.description__items}>
          <div
            className={
              active
                ? `${s.description__item} ${s.active}`
                : s.description__item
            }
          >
            <div className={s.description__item_header}>
              <h1>{creativity._id ? "Редактировать" : "Создать"}</h1>
              <div className={s.description__item_btns}>
                <button
                  disabled={creativity.text || creativity.title ? false : true}
                  className={s.description__item_btn}
                  onClick={completed}
                >
                  <GlobalSvgSelecotr id="completed" />
                </button>
                <button
                  className={s.description__item_btn}
                  onClick={() => reset()}
                >
                  <GlobalSvgSelecotr id={"cancel"} />
                </button>
              </div>
            </div>
            <input
                className={s.description__item_title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCreativity({ ...creativity, title: e.target.value })
                }
                placeholder="Название"
                disabled={active}
                value={creativity.title}
              />
            <textarea
                className={s.description__item_content}
                name="text"
                id="text"
                value={creativity.text}
                disabled={active}
                placeholder="Описание"
                onChange={(e) =>
                  setCreativity({ ...creativity, text: e.target.value })
                }
              />
          </div>
        </div>
      </div>
    </>
  );
});
