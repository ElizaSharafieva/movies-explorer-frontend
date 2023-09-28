import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Register.css';

function Register({ setHeaderHidden, setFooterHidden, onRegister, resStatus, setResStatus}) {

  React.useEffect(() => {
    setResStatus('')
  }, [])

  const errorText =
    resStatus === 'Ошибка: 409' ? 'Пользователь с таким email уже существует' :
    resStatus === 'Ошибка: 400' ? 'При регистрации пользователя произошла ошибка' :
    resStatus === 'Ошибка: 500' ? 'На сервере произошла ошибка' : '';

  return (
    <AuthForm
      name='register'
      title='Добро пожаловать!'
      button='Зарегистрироваться'
      text='Уже зарегистрированы?'
      link='Войти'
      path={'/signin'}
      style={'form__button_type_register'}
      setHeaderHidden={setHeaderHidden}
      setFooterHidden={setFooterHidden}
      resStatus={resStatus}
      setResStatus={setResStatus}
      onRegister={onRegister}
      error={errorText}
    />
  )
}

export default Register;
