import * as React from "react";
import s from "./popup.module.scss";
import { useCustomDispatch } from "../../hooks/store";
import { fetchRegister } from "../../redux/slices/authSlice";
import blackCross from "../../assets/svg/black_cross.svg";
import regist from "./regist.json";

interface Props {
  selector: boolean;
  setOpen: (value: boolean) => void;
  setSelector: (value: boolean) => void;
}

export const PopupRegistration: React.FC<Props> = ({
  setOpen,
  setSelector,
  selector,
}) => {
  const dispatch = useCustomDispatch();
  const [formValue, setFormValue] = React.useState<{[key: string]: string}>({
    email: "user2@mail.ru",
    pass: "123456",
    confPass: "123456",
    securePass: "1237890",
  });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { payload } = await dispatch(
      fetchRegister({
        email: formValue.email,
        password: formValue.pass,
        confPass: formValue.confPass,
        securePass: formValue.securePass,
      })
    );
    if(payload?.status === 200){
        window.alert("Письмо отправленно Вам на пачту!")
        setSelector(!selector)
    }
  };

  return (
    <>
      <div
        className={`${s.popup} ${s.active}`}
        // onClick={() => setOpen(false)}
      >
        <form
          className={`${s.popup__form} ${s.active}`}
          onClick={(e) => e.stopPropagation()}
          onSubmit={(e) => onSubmit(e)}
        >
          <img
            className={s.popup__cross}
            src={blackCross}
            alt="black cross"
            onClick={() => setOpen(false)}
          />
          <h5 className={s.popup__title}>Регистрация</h5>
          {regist.map((item) => (
            <input
              key={item.key}
              className={s.popup__input}
              type={item.type}
              placeholder={item.placeholder}
              onChange={(e) =>
                setFormValue({ ...formValue, [item.value]: e.target.value })
              }
              value={formValue[item.value]}
            />
          ))}
          <button className={s.popup__btn}>регстрация</button>
        </form>
          <button className={s.popup__auth_btn} onClick={() => setSelector(!selector)}>Авторизация</button>
      </div>
    </>
  );
};
