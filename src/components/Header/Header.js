import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../image/logo.svg';

function Header({ children, isTheme }) {
  return (
    <header className={`header ${isTheme && 'header__theme'}`}>
      <Link to='/' className='header__logo-link'>
        <img className='header__logo' src={logo} alt='Лого' />
      </Link>
      {children}
    </header>
  );
}

export default Header;
