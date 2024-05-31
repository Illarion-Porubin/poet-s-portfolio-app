import React, { memo } from "react";
import s from "./menu.module.scss";
import { Link } from "react-router-dom";

interface Props {
  menuId: (value: string) => void;
}

export const Menu: React.FC<Props> = memo(({ menuId }) => {
  const [id, setId] = React.useState<number>(0);
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

  const style = (index: number, item: string) => {
    setId(index);
    menuId(item);
  };

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
                onClick={() => style(index, item)}
                className={
                  index === id
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
