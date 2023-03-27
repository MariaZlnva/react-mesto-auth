import { func } from "prop-types";
import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  // const [nameCard, setNameCard] = React.useState("");
  // const [urlCard, setUrlCard] = React.useState("");
  const [values, setValues] = React.useState({}); //запишем в перемен. значения name пустое

  // React.useEffect(() => {
  //   console.log(values)//cardName:"" cardUrl:""
  //   setValues({cardName:"", cardUrl:""}); //очищаем знач полей input при открытии
  //   console.log(values)
  // }, [isOpen]);

  function onChange(evt) {
    const { name, value } = evt.target; //атрибуты inputa
    setValues((values) => ({ ...values, [name]: value })); // доб.в объект данные
  }

  function handleAddPlaceSubmit(evt) {
    evt.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace(values);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAddPlaceSubmit}
      title="Новое место"
      name="add-cards"
      titleBtn="Создать"
    >
      <input
        id="nameCard"
        className="popup__input popup__input_title"
        placeholder="Название"
        type="text"
        name="cardName"
        value={values.name}
        minLength="2"
        maxLength="30"
        required
        onChange={onChange}
      />
      <span id="nameCard-error" className="error"></span>
      <input
        id="urlCard"
        className="popup__input popup__input_link"
        placeholder="Ссылка на картинку"
        type="url"
        name="cardUrl"
        value={values.url}
        required
        onChange={onChange}
      />
      <span id="urlCard-error" className="error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
