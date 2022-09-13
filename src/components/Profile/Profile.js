import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

import './Profile.css';

function Profile() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <section className='profile'>
        <div className='profile__content'>
          <h1 className='profile__title'>Привет, Олеся!</h1>
          <form className='profile__form'>
            <div className='profile__form-field'>
              <label className='profile__form-label'>Имя</label>
              <input
                className='profile__form-input'
                placeholder='Олеся'
                type='text'
                name='name'
                required
                minLength={2}
                maxLength={30}
              />
            </div>
            <div className='profile__form-field'>
              <label className='profile__form-label'>E-mail</label>
              <input
                className='profile__form-input'
                placeholder='test@email.ru'
                type='email'
                name='email'
                required
              />
            </div>
            <div className='profile__form-footer'>
              <button className='profile__button' type='submit'>
                Редактировать
              </button>
              <Link to='/' className='profile__button profile__button_red'>
                Выйти из аккаунта
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
