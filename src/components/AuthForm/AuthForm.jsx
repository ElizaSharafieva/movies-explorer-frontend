import { useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import useFormAndValidation from '../../utils/Validation';
import './AuthForm.css';
import logo from '../../images/logo.svg';

function AuthForm(props) {

  const navigate = useNavigate();

  const { values, errors, isValid, handleChange, resetForm } = useFormAndValidation();
  const [isError, setError] = useState(false);

  const handleLogin = () => {
    navigate('/movies', { replace: true });
  };

  const handleRegister = () => {
    navigate('/signin');
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    !isValid ?
      setError(true):
    props.name==='register' ? handleRegister() : handleLogin();
  };

  return (
    <div className='form-page'>
      <div className='form-page__box'>
        <NavLink className='form-icon' to="/">
          <img src={logo} alt="logo"/>
        </NavLink>
        <h2 className='form-page__title'>
          {props.title}
        </h2>
        <form noValidate onSubmit={handleSubmit} className='form'>
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
              onChange={handleChange}
              values={values}
            ></input>}
            <label className='form__label'>E-mail</label>
            <input
                className='form__input'
                id="email"
                name="email"
                type="email"
                placeholder="E-mail"
                required
                minLength="2"
                maxLength="30"
                onChange={handleChange}
                values={values}
            />
            <label className='form__label'>Пароль</label>
            <input
                className='form__input'
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                minLength="6"
                maxLength="30"
                onChange={handleChange}
                values={values}
            />
            <p className='error'>{isError && 'Что-то пошло не так...'}</p>
            <button type="submit" className={`form__button ${props.style}`}>
              {props.button}
            </button>
        </form>
        <nav className='form-page__container'>
          <p className='form-page__text'>{props.text}</p>
          <button className='form-page__button'>
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
