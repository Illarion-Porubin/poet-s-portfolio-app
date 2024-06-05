import React, { memo } from "react";
import s from "./menu.module.scss";
import { Link } from "react-router-dom";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { contentSlice } from "../../redux/slices/contentSlice";
import { selectContentData } from "../../redux/selectors";


export const Menu: React.FC = memo(() => {
  const dispatch = useCustomDispatch();
  const content = useCustomSelector(selectContentData);
  const menu = React.useMemo(
    () => [
      "Личная информация",
      "Основной контент",
      "Добавить стих",
      "Добавить статью",
      "Изменить, удалить стих",
      "Изменить, удалить статью",
    ],
    []
  );


  return (
    <>
      <div className={s.adminMenu}>
        <Link to="/">
          <button className={s.adminMenu__exit}>Выход</button>
        </Link>
        <nav className={s.adminMenu__list}>
          <ul className={s.adminMenu__content}>
            {menu.map((item, index) => (
              <div
                onClick={() => dispatch(contentSlice.actions.setCategory(item))}
                className={
                  item === content.category
                    ? `${s.adminMenu__items} ${s.active}`
                    : s.adminMenu__items
                }
                key={item}
              >
                {item}
              </div>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
});
