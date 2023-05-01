import React from "react";

function ImagePopup({ card, onClose, isOpen }) {

    const popupStatusClassName = `popup popup_image ${card ? 'popup_opened' : ''}`

 return (
    <div className={popupStatusClassName}>
        <div className="popup__image-opened">
            <button type="button" className="popup__button-close popup__button-close_image" onClick={onClose}></button>
            <span className="popup__image-text"></span>
            <img className="popup__image" src="" alt="" />
        </div>

    </div>
)

};

export default ImagePopup;

// ВОТ тут происходит что то очень странное, у меня не читают проперти оф нулл

// return (
//     <div className={popupStatusClassName}>
//         <div className="popup__image-opened">
//             <button type="button" className="popup__button-close popup__button-close_image" onClick={onClose}></button>
//             <span className="popup__image-text">{card.name}</span>
//             <img className="popup__image" src={card.link} alt={card.name} />
//         </div>

//     </div>
// )



// работающий код без подставлений из кард 



// return (
//     <div className={popupStatusClassName}>
//         <div className="popup__image-opened">
//             <button type="button" className="popup__button-close popup__button-close_image" onClick={onClose}></button>
//             <span className="popup__image-text"></span>
//             <img className="popup__image" src="" alt="" />
//         </div>

//     </div>
// )