
// import react and usestate (allows not to write React.useState)
import React, { useState, useEffect } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForms';
import ImagePopup from './ImagePopup';
import { currentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';



function App() {
  // тут я пишу код
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    Promise.all([api.getUserProfile()])
      .then(([userData]) => {
        setCurrentUser(userData)
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
  }, []);


  const [cards, setCards] = useState([])

  useEffect(() => {
    Promise.all([api.getInitialCards()])
      .then(([cardData]) => {
        setCards(cardData)
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
  }, []);




  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // вот тут я не понимаю. этот медот же должен быть в апи?
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }


  function handleCardDelete(card) {
    api.deleteCard(card._id).then((newCard) => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }

  function handleUpdateUser(userData) {
    api.editProfile(userData)
      .then((newUserData) => {
        setCurrentUser(newUserData)
        closeAllPopups();

      })
      .catch((error) => console.log(`Ошибка: ${error}`))
  }

  // function handleCardDelete(card) {
  //   const isLiked = card.likes.some(i => i._id === currentUser._id);
  //   // вот тут я не понимаю. этот медот же должен быть в апи?
  //   api.deleteCard(card._id, !isLiked).then((newCard) => {
  //     setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  //   });
  // }


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
    <currentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        >

        </Main>
        {/* ИМАДЖ ПОПАП */}

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        >

        </ImagePopup>


        {/* ПОПАП РЕДАКТИРОВАНИЯ ПРОФИЛЯ */}
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser} />


        {/* <PopupWithForm
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

        </PopupWithForm> */}

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

    </ currentUserContext.Provider>
  );
}

export default App;
