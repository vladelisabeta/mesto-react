// import logo from './logo.svg';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (

    <body>
      <div className="page">
        <Header />
        <Main />
        <Footer />



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

        <div className="popup popup_image">
          <div className="popup__image-opened">
            <button type="button" className="popup__button-close popup__button-close_image"></button>
            <span className="popup__image-text"></span>
            <img className="popup__image" src="#" alt="" />
          </div>

        </div>


        <div className="popup popup_edit">
          <div className="popup__box">
            <button className="popup__button-close" type="button"></button>
            <div className="popup__container">
              <h3 className="popup__text">Редактировать профиль</h3>
              {/* <!--                              FORM --> */}
              <form className="popup__form" name="about" novalidate>
                <input type="text" name="name" id="name" className="popup__input popup__input_type_name" required minlength="2"
                  maxlength="40" placeholder="Имя" />
                <span className="popup__error" id="name-error">
                </span>
                <input type="text" name="info" id="info" className="popup__input popup__input_type_info" required minlength="2"
                  maxlength="200" placeholder="Вид деятельности" />
                <span className="popup__error" id="info-error">
                </span>
                <button className="popup__save" type="submit">Сохранить</button>
              </form>
            </div>
          </div>
        </div>

        <div className="popup popup_cards">
          <div className="popup__box">
            <button className="popup__button-close" type="button"></button>
            <div className="popup__container">
              <h3 className="popup__text">Новое место</h3>
              {/* <!--                                FORM --> */}
              <form className="popup__form popup__form_cards" name="cards" novalidate>
                <input type="text" name="place" id="place" className="popup__input popup__input_type-place"
                  placeholder="Название" required minlength="2" maxlength="30" />
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


        <div className="popup popup_confirm-delete">
          <div className="popup__box">
            <button className="popup__button-close popup__button-close_confirm" type="button"></button>
            <div className="popup__container popup__container_confirm">
              <h3 className="popup__text popup__text_confirm">Вы уверены?</h3>
              <form className="popup__form" name="confirm" novalidate>
                <button className="popup__save popup__save_confirm" type="submit">Да</button>
              </form>
            </div>
          </div>
        </div>

        <div className="popup popup_upload-avatar">
          <div className="popup__box">
            <button className="popup__button-close popup__button-close_upload-avatar" type="button"></button>
            <div className="popup__container popup__container_upload-avatar">
              <h3 className="popup__text popup__text_upload-avatar">Обновить аватар</h3>
              <form className="popup__form popup__form_avatar" name="upload" novalidate>
                <input type="url" name="avatar" id="avatar" className="popup__input popup__input_type-link"
                  placeholder="Ссылка на картинку" required />
                <span className="popup__error" id="avatar-error"></span>
                <button className="popup__save popup__save_upload-avatar" type="submit">Сохранить</button>
              </form>
            </div>
          </div>
        </div>



      </div>

      {/* <!-- <script type="module" src="./scripts/index.js"></script> --> */}
    </body>



  );
}

export default App;
