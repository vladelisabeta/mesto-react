import React from "react";

function Card({ card, onCardClick }) {

    function handleClick() {
        onCardClick(card);
    }

    return (
        <div className="card">
            <button type="button" className="card__trash"></button>
            <img src={card.link} alt={card.name} className="card__image" onClick={handleClick} />
            <div className="card__heart-container">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-container">
                    <button className="card__heart" type="button"></button>
                    <span className="card__like-count">{card.likes.length}</span>
                </div>
            </div>
        </div>
    )

}


export default Card;