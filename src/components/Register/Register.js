import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.svg';

import './Register.css';

function Register() {
  return (
    <section className='content__register'>
      <div className='content__register-container'>
        <Link to='/' className='register__logo-link'>
          <img alt='Логотип' className='register__logo' src={logo} />
        </Link>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='register__form'>
          <input
            className='register__input'
            type='text'
            name='name'
            placeholder='Имя'
            required
            minLength={2}
            maxLength={30}
          ></input>
          <input
            className='register__input'
            type='email'
            name='email'
            placeholder='E-mail'
            required
          ></input>
          <input
            className='register__input'
            type='password'
            name='password'
            placeholder='Пароль'
            required
          ></input>
          <button className='register__button-reg' type='submit'>
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
