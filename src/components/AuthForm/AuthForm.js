import { Link, NavLink } from 'react-router-dom';
import './AuthForm.css';
import logo from '../../images/logo.png';

function AuthForm(props) {
  console.log(props);
  return (
    <div className='form-page'>
      <div className='form-page__box'>
        <NavLink className='form-icon' to="/">
          <img src={logo} alt="logo"/>
        </NavLink>
        <h2 className='form__title'>
          {props.title}
        </h2>
        <form className='form'>
          {props.name === "register" && <label className='form__label'>Имя</label>}
          {props.name === "register" &&
            <input
              className='form__input'
              id="name"
              name="name"
              type="text"
              placeholder="Имя"
              required
              minLength="2"
              maxLength="30"
            ></input>}
            <label className='form__label'>E-mail</label>
            <input className='form__input'
                id="email"
                name="email"
                type="email"
                placeholder="E-mail"
                required
                minLength="2"
                maxLength="30"
            />
            <label className='form__label'>Пароль</label>
            <input className='form__input'
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                minLength="2"
                maxLength="30"
            />
            <p className='error'>Что-то пошло не так...</p>
            <button type="submit" className={(props.style)}>{props.button}</button>
        </form>
        <nav className='form-page__container'>
          <p className='form-page__text'>{props.text}</p>
          <button className='form-page__link'>
            <Link className='form-page__link' to={(props.path)}>
              {props.link}
            </Link>
          </button>
        </nav>
      </div>
    </div>
  )
}

export default AuthForm;
