import React from "react";
import {useEffect, useState, useContext} from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах
 useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleInputNameClick(evt) {
    setName(evt.target.value);
  }

  function handleInputDiscriptionClick(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      title="Редактировать профиль"
      name="edit-profile"
    >
      <input
        id="nameUser"
        className="popup__input popup__input_name"
        type="text"
        name="nameUser"
        value={name || ""}
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
        onChange={handleInputNameClick}
      />
      <span id="nameUser-error" className="error"></span>
      <input
        id="aboutUser"
        className="popup__input popup__input_info"
        type="text"
        name="aboutUser"
        value={description || ""}
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        required
        onChange={handleInputDiscriptionClick}
      />
      <span id="aboutUser-error" className="error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
