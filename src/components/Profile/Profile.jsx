import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormAndValidation from '../../utils/Validation';
import './Profile.css';

function Profile({setFooterHidden, setHeaderHidden, handleLogOut, changeUserInformation, resStatus, setResStatus}) {

  const [isErrorSubmit, setIsErrorSubmit] = React.useState(false);

  React.useEffect(() => {
    setHeaderHidden(false)
    setFooterHidden(true)
  }, [])

  const currentUser = React.useContext(CurrentUserContext);

  const { values, errors, isValid, setValues, handleChange, validateEmail } = useFormAndValidation({
    name: currentUser.name,
    email: currentUser.email,
  });

  const errorText =
    resStatus === 200 ? 'Сохранение прошло успешно!' :
    resStatus === 'Ошибка: 409' ? 'Пользователь с таким email уже существует' :
    resStatus === 'Ошибка: 400' ? 'При обновлении профиля произошла ошибка' :
    resStatus === 'Ошибка: 500' ? 'При обновлении профиля произошла ошибка' : '';

  React.useEffect(() => {
    setValues(() => ({  name: currentUser.name, email: currentUser.email }))
  }, [currentUser, setValues]);

  React.useEffect(() => {
    setResStatus('')
  }, [])

  React.useEffect(() => {
    if (values.name === currentUser.name && values.email === currentUser.email) {
      setIsErrorSubmit(true);
    } else {
      setIsErrorSubmit(false);
    }
  }, [currentUser.name, currentUser.email, values.email, values.name])

  const [isShowSaveButton, setShowSaveButton] = useState(false);

  const handleEditButtonClick = () => {
    setShowSaveButton(true);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, email } = values;
    changeUserInformation({ name, email });
    setShowSaveButton(false);
    console.log('click');
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
            value={values.name || ''}
            required
            minLength="2"
            maxLength="30" />
        </label>
        <span className='error'>{errors.name}</span>
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
            value={values.email || ''}
            placeholder="Email"
            required
            minLength="2"
            maxLength="30"
            />
        </label>
        {validateEmail(values.email)===null ?  <span className='error'>Введите валидный email</span>
            : <span className='error'>{errors.email}</span>}
        <p className = { resStatus === 200  ?  'profile-page__error profile-page__error_active' : 'profile-page__error'}>
          {errorText}
        </p>
        {isShowSaveButton ? (
            <button
              onClick={handleSubmit}
              disabled={!isValid || isErrorSubmit || validateEmail(values.email)===null}
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

              <Link onClick={handleLogOut} to="/" className='profile-page__button profile-page__button_type_logout'>
                Выйти из аккаунта
              </Link>

            </>
          )}
      </form>
    </div>
  )
}

export default Profile;
