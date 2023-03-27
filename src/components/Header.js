import React from "react";
import { Link, Routes, Route } from "react-router-dom";

function Header({ emailUser, onLogout }) {
  return (
    <header className="header page__header">
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
            <div className="header__authorise">
              <p className="header__email">{emailUser}</p>
              <button
                type="button"
                className="header__btnNav"
                onClick={onLogout}
              >
                Выйти
              </button>
            </div>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;

{
  /* <button className={isActiveBurger ? " header__burger_active header__burger" : "header__burger"} onClick={openPopupBurger}>
            <span className="header__burger-line"></span>
            <span className="header__burger-line"></span>
            <span className="header__burger-line"></span>
          </button> */
}
