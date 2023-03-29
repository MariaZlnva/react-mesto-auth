import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

function Header({ emailUser, onLogout, onOpenBurger, isBurgerOpen }) {
  // const [isBurgerOpen, setIiBurgerOpen] = useState(false);

  // const handlerClickBurger = () => {
  //   setIiBurgerOpen(!isBurgerOpen);
  // };

  //  меняет стейт перемен. при увелич. ширины экрана
  // function handleResize() {
  //   const windowInnerWidth = window.innerWidth;
  //   if (windowInnerWidth > 570) {
  //     setIiBurgerOpen(false);
  //   }
  // }
  // window.addEventListener("resize", handleResize);

  return (
    <header
      className={
        isBurgerOpen
          ? "header page__header header__activeBurger"
          : "header page__header"
      }
    >
      <Link to="/" className="header__logo"></Link>
      <Routes>
        <Route
          path="/sign-up"
          element={
            <Link to={"/sign-in"} className="header__btnNav">
              Войти
            </Link>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Link to={"/sign-up"} className="header__btnNav">
              Регистрация
            </Link>
          }
        />
        <Route
          path="/"
          element={
            <>
              <div
                className={
                  isBurgerOpen
                    ? "header__authorise_activeBurger"
                    : "header__authorise"
                }
              >
                <p className="header__email">{emailUser}</p>
                <button
                  type="button"
                  className="header__logout"
                  onClick={onLogout}
                >
                  Выйти
                </button>
              </div>
              {/* кнопка бургер-меню */}
              <button className="header__burger" onClick={onOpenBurger}>
                <span
                  className={
                    isBurgerOpen
                      ? "header__burgerLine header__burger_active"
                      : "header__burgerLine"
                  }
                ></span>
                <span
                  className={
                    isBurgerOpen
                      ? "header__burgerLine header__burger_active"
                      : "header__burgerLine"
                  }
                ></span>
                <span
                  className={
                    isBurgerOpen
                      ? "header__burgerLine header__burger_active"
                      : "header__burgerLine"
                  }
                ></span>
              </button>
            </>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;
