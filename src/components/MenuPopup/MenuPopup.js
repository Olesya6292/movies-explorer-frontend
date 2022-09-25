import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './MenuPopup.css';

function MenuPopup({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscClose = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [isOpen, onClose]);

  const handleOverlayClose = (e) => {
    if (e.target === e.currentTarget && isOpen) {
      onClose();
    }
  };

  return (
    <div
      className={`popup ${isOpen && 'popup_opened'}`}
      onClick={handleOverlayClose}
    >
      <div className='popup__container'>
        <button
          className='popup__close'
          type='button'
          onClick={onClose}
        ></button>
        <ul className='header__mobile-list'>
          <li className='header__mobile-item'>
            <Link to='/' className='header__mobile'>
              Главная
            </Link>
          </li>
          <li className='header__mobile-item'>
            <Link to='/movies' className='header__mobile'>
              Фильмы
            </Link>
          </li>
          <li className='header__mobile-item'>
            <Link to='/saved-movies' className='header__mobile'>
              Сохраненные фильмы
            </Link>
          </li>
        </ul>
        <Link to='/profile' className='header__account'>
          Aккаунт
        </Link>
      </div>
    </div>
  );
}

export default MenuPopup;
