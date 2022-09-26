import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import logo from '../../image/logo.svg';
import Navigation from '../Navigation/Navigation';
import SigninNav from '../SigninNav/SigninNav';

import './Header.css';

function Header({ isTheme }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <header className={`header ${isTheme && 'header__theme'}`}>
      <Link to='/' className='header__logo-link'>
        <img className='header__logo' src={logo} alt='Лого' />
      </Link>
      {currentUser ? <Navigation isTheme={isTheme} /> : <SigninNav />}
    </header>
  );
}

export default Header;
