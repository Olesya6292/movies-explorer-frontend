import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuPopup from '../MenuPopup/MenuPopup';

import './Navigation.css';

function Navigation() {
  const setActive = ({ isActive }) =>
    isActive
      ? 'header__main-link header__main-link_active'
      : 'header__main-link';

  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuPopupOpen(true);
  }
  function closePopup() {
    setIsMenuPopupOpen(false);
  }

  return (
    <>
      <nav className='header__main-content'>
        <ul className='header__main-links'>
          <li>
            <NavLink to='/movies' className={setActive}>
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink to='/saved-movies' className={setActive}>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <Link to='/profile' className='header__main-account'>
          Аккаунт
        </Link>
        <button
          className='header__mobile-button'
          type='button'
          onClick={handleMenuClick}
        ></button>
      </nav>
      <MenuPopup isOpen={isMenuPopupOpen} onClose={closePopup} />
    </>
  );
}

export default Navigation;
