import AuthForm from '../AuthForm/AuthForm';
import './Register.css';

function Register() {
  return (
    <AuthForm
      name='register'
      title='Добро пожаловать!'
      button='Зарегистрироваться'
      text='Уже зарегистрированы?'
      link='Войти'
      path={'/signin'}
      style={'form__button_type_register'}
    />
  )
}

export default Register;
