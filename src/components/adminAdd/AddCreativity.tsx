import React, { memo } from "react";
import SimpleMDE from "react-simplemde-editor";
import { GlobalSvgSelecotr } from "../../assets/global/GlobalSvgSelecotr";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import axios from "../../http";
import s from "./add.module.scss";
import "easymde/dist/easymde.min.css";
import { selectContentData } from "../../redux/selectors";
import { poemSlice } from "../../redux/slices/poemSlice";
import { title } from "process";


export const AddCreativity: React.FC = memo(() => {
  const dispatch = useCustomDispatch();
  const content = useCustomSelector(selectContentData);
  const [creativity, setCreativity] = React.useState({ title: "", text: "" });

  const [active, setActive] = React.useState<boolean>(false);
  const dataId = React.useRef<null | string | undefined>();


  const completed = () => {
    dispatch(poemSlice.actions.setPoem({...creativity}))
    setActive(true);
  };

  const reset = () => {
    setCreativity({
      title: "",
      text: "",
    });
    dataId.current = null;
    setActive(false);
  };

  React.useEffect(() => {
    if (dataId.current) {
      if (content.category === "Добавить статью") {
        axios.get(`api/article/${dataId.current}`).then((res) => {
          const data = res.data.article;
          setCreativity({
            title: data.text,
            text: data.title,
          });
          dataId.current = data._id;
        });
      } else {
        axios.get(`api/poem/${dataId.current}`).then((res) => {
          const data = res.data.poem;
          setCreativity({
            title: data.text,
            text: data.title,
          });
          dataId.current = data._id;
        });
      }
    }
    reset();
  }, [content.category, dispatch]);

//   const options: any = React.useMemo(
//     () => ({
//       spellChecker: false,
//       maxHeight: "400px",
//       placeholder: "Введите текст...",
//       status: false,
//     }),
//     []
//   );

  return (
    <>
      <h1>
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
                <div className={s.description__item_btns}>
                  <button
                    disabled={
                      creativity.text || creativity.title ? false : true
                    }
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
              <div>
                <input
                  className={s.description__item_content}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCreativity({ ...creativity, title: e.target.value })
                  }
                  placeholder="Название"
                  disabled={active}
                  value={creativity.title}
                />
              </div>
              <div>
                {/* <SimpleMDE value={creativity.text} onChange={onChange} options={options} /> */}
                <textarea
                  name="text"
                  id="text"
                  value={creativity.text}
                  disabled={active}
                  placeholder="Стих"
                  onChange={(e) =>
                    setCreativity({ ...creativity, text: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </h1>
    </>
  );
});
