import React, { Children } from "react";
import Card from "./Card";

function Main({ onEditProfile,
    onAddPlace,
    onEditAvatar,
    userName,
    userDescription,
    userAvatar,
    cards,
    card
}) {

    return (<main className="content">
        <section className="profile">
            <div className="profile__image-container" onClick={onEditAvatar}><img src={userAvatar} alt="Аватар профиля"
                className="profile__avatar" /></div>
            <div className="profile__edit-container">
                <h1 className="profile__title">{userName}</h1>
                <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__info">{userDescription}</p>
            <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
        </section>

        <section className="place-grid">
            {cards.map(card => {
                return (
                    <Card
                        card={card}
                        key={card._id}
                    >

                    </Card>

                )
            })}

        </section>
    </main>
    )
};

export default Main; 