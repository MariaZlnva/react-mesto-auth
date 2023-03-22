import React from 'react';

function PopupWithForm ({title, name, titleBtn, isOpen, onClose, children, onSubmit}) {
  
  return (
    <div 
    className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}
    >
        <div className="popup__content">
          <button aria-label="Закрыть" className="popup__close" type="button" onClick={onClose}></button>
          <h2 className="popup__title">{title}</h2>
          <form className="popup__form" name={name} onSubmit={onSubmit} >
            {children}
            <button className="popup__button" type="submit">{titleBtn || 'Сохранить'}</button>
          </form>
        </div>
      </div>
  );
}

export default PopupWithForm ;

