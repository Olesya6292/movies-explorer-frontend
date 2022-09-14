import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.svg';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

import './Register.css';

function Register({ onRegister, errorMessage }) {
  
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    const { name, email, password } = values;
    onRegister(name, email, password);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <section className='content__register'>
      <div className='content__register-container'>
        <Link to='/' className='register__logo-link'>
          <img alt='Логотип' className='register__logo' src={logo} />
        </Link>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='register__form' onSubmit={handleSubmit} noValidate>
          <label className='register__label'>Имя</label>
          <input
            className={`register__input ${
              errors.name && 'register__input_type_error'
            }`}
            type='text'
            name='name'
            placeholder=''
            value={values.name ?? ''}
            onChange={handleChange}
            required
            minLength={2}
            maxLength={30}
          ></input>
          <span
            className={`register__input-error ${
              errors.name && 'register__input-error_active'
            }`}
          >
            {errors.name ?? ''}
          </span>
          <label className='register__label'>E-mail</label>
          <input
            className={`register__input ${
              errors.email && 'register__input_type_error'
            }`}
            type='email'
            name='email'
            placeholder=''
            value={values.email ?? ''}
            onChange={handleChange}
            required
          ></input>
          <span
            className={`register__input-error ${
              errors.email && 'register__input-error_active'
            }`}
          >
            {errors.email ?? ''}
          </span>
          <label className='register__label'>Пароль</label>
          <input
            className={`register__input ${
              errors.password && 'register__input_type_error'
            }`}
            type='password'
            name='password'
            placeholder=''
            value={values.password ?? ''}
            onChange={handleChange}
            required
          ></input>
          <span
            className={`register__input-error ${
              errors.password && 'register__input-error_active'
            }`}
          >
            {errors.password ?? ''}
          </span>
          <span
            className={`register__message ${
              errorMessage && 'register__message_type_error'
            }`}
          >
            {errorMessage}
          </span>
          <button
            className={`register__button-reg ${
              !isValid && 'register__button-reg_disabled'
            }`}
            type='submit'
          >
            Зарегистрироваться
          </button>
          <div className='register__to-login'>
            <p className='register__subtitle'> Уже зарегистрированы?</p>
            <Link to='/signin' className='register__link'>
              Войти
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Register;
