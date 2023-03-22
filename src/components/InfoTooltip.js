import React from "react";

function InfoTooltip({src, alt, title, isOpen}) {
  return (
    <div className={`popup popup_infoTooltip ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__content">
        <button
          aria-label="Закрыть"
          className="popup__close"
          type="button"
          // onClick={onClose}
        ></button>
        <div className="popup__infoTool">
          <img className="popup__img" src={src} alt={alt}/>
          <h2 className="popup__titleInfoTool">{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
