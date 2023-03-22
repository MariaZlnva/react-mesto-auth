import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Register from "./Register";
import Login from "./Login";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import InfoTooltip from "./InfoTooltip";
import success from '../images/success.svg';
import fail from '../images/fail.svg';

function App() {
  const body = document.getElementsByTagName("body")[0];
  body.classList = "page";

  const [currentUser, setCurrentUser] = useState({});
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);
  //переменные состояния, отвечающие за видимость трёх попапов:
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  useEffect(() => {
    api
      .getInitialData()
      .then(([dataUser, cardsServer]) => {
        setCurrentUser(dataUser);
        setCards(cardsServer);
      })
      .catch((err) => console.log("Error getInitialData!"));
  }, []);

  function handleUpdateUser(dataInput) {
    api
      .changeProfileData(dataInput)
      .then((res) => {
        console.log(res);
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log("Error user data updates!"));
  }

  function handleUpdateAvatar(dataAvatar) {
    api
      .changeAvatar(dataAvatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log("Error avatar data updates!"));
  }

  function handleAddPlaceSubmit(dataCard) {
    api
      .addNewCard(dataCard)
      .then((newCard) => {
        closeAllPopups();
        setCards([newCard, ...cards]);
      })
      .catch((err) => console.log("Error add card!"));
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    (isLiked ? api.deleteLike(card._id) : api.addLike(card._id))
      .then((updateDataCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? updateDataCard : c))
        );
      })
      .catch((err) => console.log("Error button-like processing!!!"));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then((res) => {
        setCards((cards) => cards.filter((item) => item._id !== card._id));
      })
      .catch((err) => console.log("Error delete card!!!"));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div>
        <Header />
        <Routes>
          // для регистрации пользователя
          <Route path="/sign-up" element={<Register />}/>
          // для авторизации пользователя
          <Route path="/sign-in"element={<Login />}/>
          <Route
            path="/"
            element={
              <Main
                cards={cards}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />
            }
          />
        </Routes>
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        
        <InfoTooltip  src={success} alt="Удачно!" title="Вы успешно зарегистрировались!"/>
        <InfoTooltip isOpen="true" src={fail} alt="Ошибка" title="Что-то пошло не так! Попробуйте ещё раз."/>
        
        <PopupWithForm title="Вы уверены?" name="delete-card" titleBtn="Да" />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
