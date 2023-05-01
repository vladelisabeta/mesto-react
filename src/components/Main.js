import React from "react";

function Main({ onEditProfile,
    onAddPlace,
    onEditAvatar,
    userName,
    userDescription,
    userAvatar
}) {

    return (<main className="content">
        <section className="profile">
            <div className="profile__image-container" onClick={onEditAvatar}><img src="<%=require('./images/kusto.jpg')%>" alt="Аватар профиля"
                className="profile__avatar" /></div>
            <div className="profile__edit-container">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__info">Исследователь океана</p>
            <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
        </section>

        <section className="place-grid">

        </section>
    </main>
    )
};

export default Main;