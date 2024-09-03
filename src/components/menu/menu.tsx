import React, { memo } from "react";
import s from "./menu.module.scss";
import { Icons } from "../../components/icons/icons";
import { GlobalSvgSelecotr } from "../../assets/global/GlobalSvgSelecotr";
import { Link } from "react-router-dom";
import { useCustomSelector } from "../../hooks/store";
import { selectAuthData } from "../../redux/selectors";
import { PopupAuth } from "../popup/PopupAuth";
import { useNavigate, useLocation } from "react-router-dom";

export const Menu: React.FC = memo(() => {
  const [mobMenu, setMobMenu] = React.useState<boolean>(false);
  const [visionMenu, setVisionMenu] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const auth = useCustomSelector(selectAuthData);
  const navigate = useNavigate();
  const location = useLocation();

  const checkAdmin = () => {
    if (auth.isLoading === "loaded" && auth.data?.user?.admin) {
      navigate("/admin");
    } else {
      console.log(2);
      setOpen(true);
    }
  };

  React.useEffect(() => {
    if (window.location.href.slice(-5) !== "admin") {
      return setVisionMenu(true);
    }
    setVisionMenu(false);
  }, [location]);

  return (
    <>
      {visionMenu ? (
        <div>
          {
            open && <PopupAuth open={open} setOpen={setOpen} />
          }
          <div className={s.menu}>
            <div className="container">
              <div className={s.menu__wrapp}>
                <div
                  className={
                    mobMenu
                      ? `${s.menu__content} ${s.menu__content_active}`
                      : s.menu__content
                  }
                >
                  <nav className={s.menu__nav}>
                    <ul className={s.menu__list}>
                      <li className={s.menu__list_li}>
                        <Link to="/">главная</Link>
                      </li>
                      <li className={s.menu__list_li}>
                        <Link to="/poem">стихи</Link>
                      </li>
                      <li className={s.menu__list_li}>
                        <Link to="/stories">рассказы</Link>
                      </li>
                    </ul>
                  </nav>
                  <Icons />
                </div>
                <div className={s.menu__info}>
                  <div className={s.menu__enter} onClick={() => checkAdmin()}>
                    <GlobalSvgSelecotr id={`enter`} />
                  </div>
                  <button
                    className={
                      mobMenu ? s.menu__mob_btn__active : s.menu__mob_btn
                    }
                    onClick={() => setMobMenu((prev) => !prev)}
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
});
