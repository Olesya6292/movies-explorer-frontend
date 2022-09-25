/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import * as mainApi from '../../utils/MainApi';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ERRORS, REQUEST_ERRORS } from '../../utils/constants';

import './Profile.css';

function Profile({ onUpdate, onLogout }) {
  const { values, setValues, handleChange, errors } = useFormAndValidation();

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (currentUser) {
      setValues({
        ...values,
        name: currentUser.name,
        email: currentUser.email,
      });
    }
  }, [currentUser, setValues]);

  const [isEdit, setIsEdit] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleEditClick() {
    setIsEdit((state) => !state);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage(false);
    const { name, email } = values;
    mainApi
      .updateUserInfo(name, email)
      .then((data) => {
        setIsLoading(false);
        setSuccessMessage(true);
        setTimeout(() => setSuccessMessage(false), 2000);
        handleEditClick();
        onUpdate(data);
      })
      .catch((err) => {
        if (err === ERRORS.CONFLICT) {
          setErrorMessage(REQUEST_ERRORS.UPDATE_409);
        } else {
          setErrorMessage(REQUEST_ERRORS.UPDATE_DEFAULT);
        }
        setIsLoading(false);
      });
  }

  return (
    <>
      <Header />
      <section className='profile'>
        <div className='profile__content'>
          <h1 className='profile__title'>{`Привет, ${currentUser?.name}!`}</h1>
          <form className='profile__form' onSubmit={handleSubmit} noValidate>
            <div className='profile__form-field'>
              <label className='profile__form-label'>
                Имя
                <input
                  className={`profile__form-input ${
                    errors.name && 'profile__form-input_type_error'
                  }`}
                  placeholder=''
                  type='text'
                  id='name'
                  name='name'
                  value={values.name ?? ''}
                  onChange={handleChange}
                  disabled={!isEdit || isLoading}
                  required
                  minLength={2}
                  maxLength={30}
                />
              </label>
            </div>
            <span
              className={`profile__form-input-error ${
                errors.name && 'profile__form-input-error_active'
              }`}
            >
              {errors.name}
            </span>

            <div className='profile__form-field'>
              <label className='profile__form-label'>
                E-mail
                <input
                  className={`profile__form-input ${
                    errors.email && 'profile__form-input_type_error'
                  }`}
                  placeholder=''
                  type='email'
                  name='email'
                  id='email'
                  value={values.email || ''}
                  onChange={handleChange}
                  disabled={!isEdit || isLoading}
                  pattern='[^@\s]+@[^@\s]+\.[^@\s]+'
                  required
                />
              </label>
            </div>
            <span
              className={`profile__form-input-error ${
                errors.email && 'profile__form-input-error_active'
              }`}
            >
              {errors.email}
            </span>
            <p
              className={`profile__form-message ${
                successMessage && 'profile__form-message_type_success'
              }`}
            >
              Ваши данные успешно изменены
            </p>

            {isEdit && (
              <div className='profile__form-save'>
                <p
                  className={`profile__message ${
                    errorMessage && 'profile__message_type_error'
                  }`}
                >
                  {errorMessage}
                </p>
                <button
                  className={`profile__save-button ${
                    !(
                      currentUser.name !== values.name ||
                      currentUser.email !== values.email
                    ) && 'profile__save-button_disabled'
                  }`}
                  type='submit'
                  disabled={
                    !(
                      currentUser.name !== values.name ||
                      currentUser.email !== values.email
                    )
                  }
                >
                  Сохранить
                </button>
              </div>
            )}
          </form>
          {!isEdit && (
            <div className='profile__form-footer'>
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
          )}
        </div>
      </section>
    </>
  );
}

export default Profile;
