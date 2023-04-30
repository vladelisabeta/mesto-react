import React from "react";

function Main() {
    return (<main className="content">
        <section className="profile">
            <div className="profile__image-container"><img src="<%=require('./images/kusto.jpg')%>" alt="Аватар профиля"
                className="profile__avatar" /></div>
            {/* <!-- <img src="<%=require('./images/kusto.jpg')%>" alt="Аватар профиля" className="profile__avatar"> --> */}
            <div className="profile__edit-container">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <button className="profile__edit-button" type="button"></button>
            </div>
            <p className="profile__info">Исследователь океана</p>
            <button className="profile__add-button" type="button"></button>
        </section>

        <section className="place-grid">

        </section>
    </main>
    )
};

export default Main;