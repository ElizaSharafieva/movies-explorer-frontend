import AuthForm from '../AuthForm/AuthForm';
import style from './Register.module.css';

function Register() {
  return (
    <AuthForm 
      name='register'
      title='Добро пожаловать!'
      button='Зарегистрироваться'
      text='Уже зарегистрированы?'
      link='Войти'
      path={'/signin'}
      style={style.register}
    />
  )
}

export default Register;
