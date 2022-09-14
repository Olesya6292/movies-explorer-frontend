import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.svg';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

import './Login.css';

function Login({ onLogin, errorMessage }) {

  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password } = values;
    onLogin(email, password);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <section className='content__login'>
      <div className='content__login-container'>
        <Link to='/' className='login__logo-link'>
          <img alt='Логотип' className='login__logo' src={logo} />
        </Link>
        <h2 className='login__title'>Рады видеть!</h2>
        <form className='login__form' onSubmit={handleSubmit} noValidate>
          <label className='login__label'>E-mail</label>
          <input
            className={`login__input ${
              errors.email && 'login__input_type_error'
            }`}
            type='email'
            name='email'
            placeholder=''
            value={values.email ?? ''}
            onChange={handleChange}
            required
          ></input>
          <span
            className={`login__input-error ${
              errors.email && 'login__input-error_active'
            }`}
          >
            {errors.email ?? ''}
          </span>
          <label className='login__label'>Пароль</label>
          <input
            className={`login__input ${
              errors.password && 'login__input_type_error'
            }`}
            type='password'
            name='password'
            placeholder=''
            value={values.password ?? ''}
            onChange={handleChange}
            required
          ></input>
          <span
            className={`login__input-error ${
              errors.password && 'login__input-error_active'
            }`}
          >
            {errors.password ?? ''}
          </span>
          <span
            className={`login__message ${
              errorMessage && 'login__message_type_error'
            }`}
          >
            {errorMessage}
          </span>
          <button
            className={`login__button ${!isValid && 'login__button_disabled'}`}
            type='submit'
          >
            Войти
          </button>
          <div className='login__to-reg'>
            <p className='login__subtitle'>Ещё не зарегистрированы?</p>
            <Link to='/signup' className='login__link'>
              Регистрация
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Login;
