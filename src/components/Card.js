import React from "react";

function Card({ cards }) {
    cards.map(card => {
        return (
            <template className="template-card">
                <div className="card">
                    <button type="button" className="card__trash"></button>
                    <img src={card.link} alt="загруженная картинка пользователя" className="card__image" />
                    <div className="card__heart-container">
                        <h2 className="card__title">{card.name}</h2>
                        <div className="card__like-container">
                            <button className="card__heart" type="button"></button>
                            <span className="card__like-count">{card.likes}</span>
                        </div>
                    </div>
                </div>
            </template>
        )
    })

}

export default Card;