import React from "react";

function Main() {

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


    return (<main className="content">
        <section className="profile">
            <div className="profile__image-container" onClick={handleEditAvatarClick}><img src="<%=require('./images/kusto.jpg')%>" alt="Аватар профиля"
                className="profile__avatar" /></div>
            {/* <!-- <img src="<%=require('./images/kusto.jpg')%>" alt="Аватар профиля" className="profile__avatar"> --> */}
            <div className="profile__edit-container">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
            </div>
            <p className="profile__info">Исследователь океана</p>
            <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
        </section>

        <section className="place-grid">

        </section>
    </main>
    )
};

export default Main;