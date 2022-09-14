import React from 'react';
import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Profile.css';

function Profile({ onUpdate, errorMessage, onLogout }) {
  const { values, setValues, handleChange, errors, isValid } =
    useFormAndValidation();

  const currentUser = useContext(CurrentUserContext);

  const [isEdit, setIsEdit] = useState(false);
  const isChange =
    (currentUser.name !== values.name) || (currentUser.email !== values.email);

  function handleSubmit(evt) {
    evt.preventDefault();
    const { name, email } = values;
    onUpdate(name, email);
  }

  function handleEditClick() {
    setIsEdit(true);
  }

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <section className='profile'>
        <div className='profile__content'>
          <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
          <form className='profile__form' onSubmit={handleSubmit} noValidate>
            <div className='profile__form-field'>
              <label className='profile__form-label'>Имя</label>
              <input
                className={`profile__form-input ${
                  errors.name && 'profile__form-input_type_error'
                }`}
                placeholder=''
                type='text'
                name='name'
                value={values.name ?? ''}
                onChange={handleChange}
                disabled={!isEdit}
                required
                minLength={2}
                maxLength={30}
              />
              <span
                className={`profile__form-input-error ${
                  errors.name && 'profile__form-input-error_active'
                }`}
              >
                {errors.name}
              </span>
            </div>
            <div className='profile__form-field'>
              <label className='profile__form-label'>E-mail</label>
              <input
                className={`profile__form-input ${
                  errors.email && 'profile__form-input_type_error'
                }`}
                placeholder=''
                type='email'
                name='email'
                value={values.email || ''}
                onChange={handleChange}
                disabled={!isEdit}
                required
              />
              <span
                className={`profile__form-input-error ${
                  errors.email && 'profile__form-input-error_active'
                }`}
              >
                {errors.email}
              </span>
              <p
                className={`profile__form-message ${
                  !isChange && 'profile__form-message_type_success'
                }`}
              >
                Данные успешно обновлены!
              </p>
            </div>
            <div
              className={`profile__form-footer ${
                !isEdit && 'profile__form-footer_enable'
              }`}
            >
              <button
                className='profile__button'
                type='submit'
                onClick={handleEditClick}
              >
                Редактировать
              </button>
              <Link
                to='/'
                className='profile__button profile__button_red'
                onClick={onLogout}
              >
                Выйти из аккаунта
              </Link>
            </div>
            <div
              className={`profile__form-save ${
                isEdit && 'profile__form-save_enable'
              }`}
            >
              <p
                className={`profile__message ${
                  errorMessage && 'profile__message_type_error'
                }`}
              >
                {errorMessage}
              </p>
              <button
                className={`profile__save-button ${
                  (!isValid || !isChange) && '`profile__save-button_disabled'
                }`}
                type='submit'
                disabled={!isValid || !isChange}
              >
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
