
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
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';



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

  // функция апдейта аватара

  function handleUpdateAvatar(avatarData) {
    api.updateAvatar(avatarData)
      .then((newAvatar) => {
        setCurrentUser(newAvatar)
        closeAllPopups()
      })
  }

  //  ФУНКЦИЯ ДОБАВЛЕНИЯ КАРТОЧКИ 

  function handleAddPlaceSubmit(cardData) {
    api.addCardToServer(cardData)
      .then((newCard) => {
        setCards([newCard, ...cards])
        closeAllPopups()
      })

  }

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


        {/* ПОПАП ADD КАРТОЧКИ */}
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />


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

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <Footer />
      </div>

    </ currentUserContext.Provider>
  );
}

export default App;
