import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    card && (
      <div className="popup popup_big-picture popup_opened">
        <div className="popup__content-big">
          <img
            src={`${card.link}`}
            alt={card.name}
            className="popup__image-big"
          />
          <button
            aria-label="Закрыть"
            className="popup__close"
            type="button"
            onClick={onClose}
          ></button>
          <h2 className="popup__title-big">{card.name}</h2>
        </div>
      </div>
    )
  );
}

export default ImagePopup;
