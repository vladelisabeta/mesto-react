import React from "react";

function ImagePopup({card, onClose}) {
    return (
        <div className="popup popup_image">
            <div className="popup__image-opened">
                <button type="button" className="popup__button-close popup__button-close_image"></button>
                <span className="popup__image-text"></span>
                <img className="popup__image" src="#" alt="" />
            </div>

        </div>
    )
};

export default ImagePopup;