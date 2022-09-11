import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.svg'

import './Login.css';

function Login() {
  return (
    <section className='content__login'>
      <div className='content__login-container'>
      <Link to='/' className='login__logo-link'>
        <img alt='Логотип' className='login__logo' src={logo} />
        </Link>
        <h2 className='login__title'>Рады видеть!</h2>
        <form className='login__form'>
          <input
            className='login__input'
            type='email'
            name='email'
            placeholder='E-mail'
            required
          ></input>
          <input
            className='login__input'
            type='password'
            name='password'
            placeholder='Пароль'
            required
          ></input>
          <button className='login__button' type='submit'>
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