
// import react and usestate (allows not to write React.useState)
import React, { useState, useEffect } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForms';
import ImagePopup from './ImagePopup';



function App() {

  // здесь опен попап кард

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => { setSelectedCard(card) }


  // хуки стейта
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);


  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  };


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null)
  }


  return (

    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      >

      </Main>
      {/* ИМАДЖ ПОПАП */}

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      >

      </ImagePopup>


      {/* ПОПАП РЕДАКТИРОВАНИЯ ПРОФИЛЯ */}
      <PopupWithForm
        title='Редактировать профиль'
        name='popup_edit'
        buttonText='Сохранить'
        formName='about'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        card={selectedCard}
      >
        <input
          type="text" name="name" id="name" className="popup__input popup__input_type_name" required minLength="2"
          maxLength="40" placeholder="Имя"
        />

        <span className="popup__error" id="name-error">
        </span>

        <input type="text" name="info" id="info" className="popup__input popup__input_type_info" required minLength="2"
          maxLength="200" placeholder="Вид деятельности" />
        <span className="popup__error" id="info-error">
        </span>

      </PopupWithForm>

      {/* ПОПАП КАРТОЧКИ */}
      <PopupWithForm
        name='popup_cards'
        title='Новое место'
        buttonText='Создать'
        formName='cards'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input type="text" name="place" id="place" className="popup__input popup__input_type-place"
          placeholder="Название" required minLength="2" maxLength="30" />
        <span className="popup__error" id="place-error">
        </span>
        <input type="url" name="link" id="link" className="popup__input popup__input_type-link"
          placeholder="Ссылка на картинку" required />
        <span className="popup__error" id="link-error">
        </span>

      </PopupWithForm>


      {/* ПОПАП ПОДТВЕРЖДЕНИЯ УДАЛЕНИЯ */}
      <PopupWithForm
        title='Вы уверены?'
        name='popup_confirm-delete'
        formName='confirm'
        buttonText='Да'
        onClose={closeAllPopups}
      >

      </PopupWithForm>


      {/*  ПОПАП ОБНОВЛЕНИЯ АВАТАРА*/}
      <PopupWithForm
        title='Обновить аватар'
        name='popup_upload-avatar'
        formName='upload'
        buttonText='Сохранить'
        popupContent='popup__container_upload-avatar'
        buttonClose='popup__button-close_upload-avatar'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input type="url" name="avatar" id="avatar" className="popup__input popup__input_type-link"
          placeholder="Ссылка на картинку" required />
        <span className="popup__error" id="avatar-error"></span>


      </PopupWithForm>

      <Footer />
    </div>
  );
}

export default App;
