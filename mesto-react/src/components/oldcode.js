// import logo from './logo.svg';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForms';

function App() {
  return (

    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />

        {/* ПОПАП РЕДАКТИРОВАНИЯ ПРОФИЛЯ */}
        <PopupWithForm
          title='Редактировать профиль'
          name='about'
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
          name='cards'
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
          name='confirm-delete'
          formName='confirm'
          buttonText='Да'

        >

        </PopupWithForm>


{/*  ПОПАП ОБНОВЛЕНИЯ АВАТАРА*/}
        <PopupWithForm
          title='Обновить аватар'
          name='upload-avatar'
          formName='upload'
          buttonText='Сохранить'
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


        {/* WHITE CROW */}
        <div className="popup popup_image">
          <div className="popup__image-opened">
            <button type="button" className="popup__button-close popup__button-close_image"></button>
            <span className="popup__image-text"></span>
            <img className="popup__image" src="#" alt="" />
          </div>

        </div>

        {/* POPUP WITH FORM  done*/}
        <div className="popup popup_edit">
          <div className="popup__box">
            <button className="popup__button-close" type="button"></button>
            <div className="popup__container">
              <h3 className="popup__text">Редактировать профиль</h3>
              <form className="popup__form" name="about" noValidate>
                <input type="text" name="name" id="name" className="popup__input popup__input_type_name" required minLength="2"
                  maxLength="40" placeholder="Имя" />
                <span className="popup__error" id="name-error">
                </span>
                <input type="text" name="info" id="info" className="popup__input popup__input_type_info" required minLength="2"
                  maxLength="200" placeholder="Вид деятельности" />
                <span className="popup__error" id="info-error">
                </span>
                <button className="popup__save" type="submit">Сохранить</button>
              </form>
            </div>
          </div>
        </div>

        {/* POPUPWITH FORM ДОН*/}
        <div className="popup popup_cards">
          <div className="popup__box">
            <button className="popup__button-close" type="button"></button>
            <div className="popup__container">
              <h3 className="popup__text">Новое место</h3>
              {/* <!--                                FORM --> */}
              <form className="popup__form popup__form_cards" name="cards" noValidate>
                <input type="text" name="place" id="place" className="popup__input popup__input_type-place"
                  placeholder="Название" required minLength="2" maxLength="30" />
                <span className="popup__error" id="place-error">
                </span>
                <input type="url" name="link" id="link" className="popup__input popup__input_type-link"
                  placeholder="Ссылка на картинку" required />
                <span className="popup__error" id="link-error">
                </span>
                <button className="popup__save" type="submit">Создать</button>
              </form>
            </div>
          </div>
        </div>

        {/* POPUP WITH FORM потенциальные проблемы с именем конферм делит done*/}
        <div className="popup popup_confirm-delete">
          <div className="popup__box">
            <button className="popup__button-close popup__button-close_confirm" type="button"></button>
            <div className="popup__container popup__container_confirm">
              <h3 className="popup__text popup__text_confirm">Вы уверены?</h3>
              <form className="popup__form" name="confirm" noValidate>
                <button className="popup__save popup__save_confirm" type="submit">Да</button>
              </form>
            </div>
          </div>
        </div>

        {/* POPUPWITH FORM ДАН*/}
        <div className="popup popup_upload-avatar">
          <div className="popup__box">
            <button className="popup__button-close popup__button-close_upload-avatar" type="button"></button>
            <div className="popup__container popup__container_upload-avatar">
              <h3 className="popup__text popup__text_upload-avatar">Обновить аватар</h3>
              <form className="popup__form popup__form_avatar" name="upload" noValidate>
                <input type="url" name="avatar" id="avatar" className="popup__input popup__input_type-link"
                  placeholder="Ссылка на картинку" required />
                <span className="popup__error" id="avatar-error"></span>
                <button className="popup__save popup__save_upload-avatar" type="submit">Сохранить</button>
              </form>
            </div>
          </div>
        </div>



      </div>
    </>
  );
}

export default App;



//  functions from main 
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