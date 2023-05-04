import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForms';

function EditProfilePopup({ isOpen, onClose }) {
    return (
        <PopupWithForm
            title='Редактировать профиль'
            name='popup_edit'
            buttonText='Сохранить'
            formName='about'
            isOpen={isOpen}
            onClose={onClose}
        >
            <input
                type="text" name="name" id="name" className="popup__input popup__input_type_name" required minLength="2"
                maxLength="40" placeholder="Имя"
            />

            <span className="popup__error" id="name-error">
            </span>

            <input type="text" name="info" id="info" className="popup__input popup__input_type_info" required minLength="2"
                maxLength="200" placeholder="Вид деятельности" />
            <span className="popup__error" id="info-error">
            </span>

        </PopupWithForm>

    )
}

export default EditProfilePopup