import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import useFormAndValidation from '../../utils/Validation';
import './AuthForm.css';
import logo from '../../images/logo.svg';

function AuthForm(props) {

  const { values, errors, isValid, handleChange, validateEmail} = useFormAndValidation();
  const [disableButton, setDisableButton] = useState(true);

  React.useEffect(() => {
    props.setHeaderHidden(true)
    props.setFooterHidden(true)
  })

  const handleLogin = () => {
    props.onLogin({ email: values.email, password: values.password });
  };

  const handleRegister = () => {
    props.onRegister({ name: values.name , email: values.email, password: values.password});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setDisableButton(false);
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
        <form onSubmit={handleSubmit} className='form'>
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
              errors={errors}
            ></input>}
            <span className='error'>{errors.name}</span>
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
            {validateEmail(values.email)===null ?  <span className='error'>Введите валидный email</span>
            : <span className='error'>{errors.email}</span>}
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
                errors={errors}
            />
            <span className='error'>{errors.password}</span>
            <p className='error'>{props.error}</p>
            <button type="submit" disabled={!isValid || validateEmail(values.email)===null || !disableButton}  className={`form__button ${props.style}`}>
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
