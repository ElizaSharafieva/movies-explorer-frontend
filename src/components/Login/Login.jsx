import AuthForm from '../AuthForm/AuthForm';
import './Login.css';

function Login() {
  return(
    <AuthForm
      name='login'
      title='Рады видеть!'
      button='Войти'
      text='Ещё не зарегистрированы?'
      link='Регистрация'
      path={'/signup'}
      style={'form__button_type_login'}
    />
  );

};

export default Login;
