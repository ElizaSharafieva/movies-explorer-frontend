import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import useFormAndValidation from '../../utils/Validation';
import './Profile.css';

function Profile() {


  const [currentUser, setCurrentUser] = useState({ name: 'Виталий', email: 'Vitaly@yandex.ru' });

  const { values, isValid, handleChange } = useFormAndValidation({
    name: currentUser.name,
    email: currentUser.email,
  });

  const [isShowSaveButton, setShowSaveButton] = useState(false);
  const [isError, setError] = useState(false);

  const handleEditButtonClick = () => {
    setShowSaveButton(true);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setError(true);
  };

  return (
    <div className='profile-page'>
      <h2 className='profile-page__title'>
          Привет, {currentUser.name}!
      </h2>
      <form noValidate onSubmit={handleSubmit} className='profile-form'>
        <label className='profile-form__label'>
          Имя
          <input className='profile-form__input'
            id="name"
            name="name"
            type="text"
            placeholder="Имя"
            onChange={handleChange}
            disabled={!isShowSaveButton}
            value={values.name}
            required
            minLength="2"
            maxLength="30" />
        </label>
        <hr className='border'></hr>
        <label className='profile-form__label'>
          Email
          <input className='profile-form__input'
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            disabled={!isShowSaveButton}
            onFocus={handleEditButtonClick}
            value={values.email}
            placeholder="Email"
            required
            minLength="2"
            maxLength="30"
            />
        </label>
        <p className='profile-page__error'>
          {isError && 'При обновлении профиля произошла ошибка.'}
        </p>
        {isShowSaveButton ? (
            <button
              disabled={!isValid}
              type='submit'
              className='profile-page__button profile-page__button_type_submit'
            >
              Сохранить
            </button>
          ) : (
            <>
              <button
                type='button'
                className='profile-page__button'
                onClick={handleEditButtonClick}
              >
                Редактировать
              </button>

              <Link to="/" className='profile-page__button profile-page__button_type_logout'>
                Выйти из аккаунта
              </Link>

            </>
          )}
      </form>
    </div>
  )
}

export default Profile;
