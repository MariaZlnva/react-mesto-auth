import React from "react";
import success from '../images/success.svg';
import fail from '../images/fail.svg';

function InfoTooltip({isOpen, isSuccess, onClose}) {
  return (
    <div className={`popup popup_infoTooltip ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__content">
        <button
          aria-label="Закрыть"
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <div className="popup__infoTool">
          {<img 
            className="popup__img" 
            src={isSuccess ? success : fail} 
            alt={isSuccess ? "Удачно!" : "Ошибка"}/>}
          <h2 className="popup__titleInfoTool">{isSuccess ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</h2>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;

