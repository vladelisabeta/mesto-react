import React from "react";

function PopupWithForm({
    name,
    title,
    formName,
    buttonText,
    children,
    uploadAvatarClass,
    buttonCloseAvatar,
}) {
    return (
        <div className={`popup ${name}`}>
            <div className="popup__box">
                <button className={`popup__button-close ${buttonCloseAvatar}`} type="button"></button>
                <div className={`popup__container ${uploadAvatarClass}`}>
                    <h3 className="popup__text">{title}</h3>
                    {/* FORM HERE */}
                    <form className="popup__form" name={`${formName}`} noValidate>
                        {children}
                        <button className="popup__save" type="submit">{buttonText}</button>
                    </form>
                    {/* END FORM */}
                </div>
            </div>
        </div>
    )
}

export default PopupWithForm;