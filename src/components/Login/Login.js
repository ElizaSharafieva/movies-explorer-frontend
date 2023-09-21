import AuthForm from '../AuthForm/AuthForm';
import style from './Login.module.css';

console.log(style);

function Login() {
  return(
    <AuthForm 
      name='login'
      title='Рады видеть!'
      button='Войти'
      text='Ещё не зарегистрированы?'
      link='Регистрация'
      path={'/signup'}
      style={style.login}
    />
  );
  
};

export default Login;