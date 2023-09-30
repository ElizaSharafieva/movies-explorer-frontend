import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Login.css';

function Login({setHeaderHidden, setFooterHidden, onLogin, resStatus, setResStatus, isLoading}) {

  React.useEffect(() => {
    setResStatus('')
  }, [])

  const errorText =
    resStatus === 'Ошибка: 401' ? 'Токен не передан или передан не в том формате.' :
    resStatus === 'Ошибка: 400' ? 'Вы ввели неправильный логин или пароль' :
    resStatus === 'Ошибка: 500' ? 'На сервере произошла ошибка' : '';

  return(
    <AuthForm
      name='login'
      title='Рады видеть!'
      button='Войти'
      text='Ещё не зарегистрированы?'
      link='Регистрация'
      path={'/signup'}
      style={'form__button_type_login'}
      setHeaderHidden={setHeaderHidden}
      setFooterHidden={setFooterHidden}
      onLogin={onLogin}
      error={errorText}
      isLoading={isLoading}
    />
  );

};

export default Login;
