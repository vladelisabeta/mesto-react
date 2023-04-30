import React from "react";

function PopupWithForm({ props }) {
    return (
        <div className={'popup ${props.name}'}>
            <div className="popup__box">
                <button className="popup__button-close" type="button"></button>
                <div className="popup__container">
                    <h3 className="popup__text">{'props.title'}</h3>
                    {/* FORM HERE */}
                    <form className="popup__form" name={'${props.formName}'} noValidate>
                        <button className="popup__save" type="submit">{'props.text'}</button>
                    </form>
                    {/* END FORM */}
                </div>
            </div>
        </div>
    )
}

export default PopupWithForm;