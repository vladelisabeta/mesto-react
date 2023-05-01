// import logo from './logo.svg';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForms';
import ImagePopup from './ImagePopup';










function App() {

  function handleEditAvatarClick() {
    const popupEditAvatar = document.querySelector('.popup_upload-avatar');
    popupEditAvatar.classList.add('popup_opened');
    console.log('что происходит')
  }


  function handleEditProfileClick() {
    const popupEditProfile = document.querySelector('.popup_edit')
    popupEditProfile.classList.add('popup_opened')
  }

  function handleAddPlaceClick() {
    const popupAddCards = document.querySelector('.popup_cards');
    popupAddCards.classList.add('popup_opened');
  }

  return (

    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <ImagePopup />
        {/* ПОПАП РЕДАКТИРОВАНИЯ ПРОФИЛЯ */}
        <PopupWithForm
          title='Редактировать профиль'
          name='popup_edit'
          buttonText='Сохранить'
          formName='about'
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
        >

        </PopupWithForm>


        {/*  ПОПАП ОБНОВЛЕНИЯ АВАТАРА*/}
        <PopupWithForm
          title='Обновить аватар'
          name='popup_upload-avatar'
          formName='upload'
          buttonText='Сохранить'
          uploadAvatarClass='popup__container_upload-avatar'
          buttonCloseAvatar='popup__button-close_upload-avatar'
        >
          <input type="url" name="avatar" id="avatar" className="popup__input popup__input_type-link"
            placeholder="Ссылка на картинку" required />
          <span className="popup__error" id="avatar-error"></span>


        </PopupWithForm>


        {/* cartochki */}
        <template className="template-card">
          <div className="card">
            <button type="button" className="card__trash"></button>
            <img src="#" alt="загруженная картинка пользователя" className="card__image" />
            <div className="card__heart-container">
              <h2 className="card__title"></h2>
              <div className="card__like-container">
                <button className="card__heart" type="button"></button>
                <span className="card__like-count"></span>
              </div>
            </div>
          </div>
        </template>


      </div>
    </>
  );
}

export default App;
