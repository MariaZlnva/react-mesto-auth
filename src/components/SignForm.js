import React from "react";

function SignForm ({ title, titleBtn, isJwt }){
  return (
    <div className="sign page__sign">
      <div className="sign__content">
      {/* <button aria-label="Закрыть" className="popup__close" type="button" onClick={onClose}></button> */}
      <h2 className="sign__title">{title}</h2>
      <form className="sign__form" name="sign">
        <input
          id="email"
          className="sign__input sign__input_email"
          type="email"
          name="emailInput"
          value=""
          placeholder="E-mail"
          // minLength="2"
          // maxLength="40"
          required
          // onChange={handleInputNameClick}
        />
        <span id="emailInput-error" className="error"></span>
        <input
          id="password"
          className="sign__input sign__input_info"
          type="password"
          name="passwordInput"
          value=""
          placeholder="Пароль"
          minLength="2"
          maxLength="20"
          required
          // onChange={handleInputDiscriptionClick}
        />
        <span id="aboutUser-error" className="error"></span>

        <button className="sign__bntSubmit" type="submit">
          {titleBtn}
        </button>

      </form>
      {isJwt && <button className="sign__btnLink" type="button">Уже зарегистрированы? Войти</button>}
      </div>
    </div>
  );
}

export default SignForm;