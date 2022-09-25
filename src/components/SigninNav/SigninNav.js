import React from 'react';
import { Link } from 'react-router-dom';

import './SigninNav.css';

function SigninNav() {
  return (
    <div className='header__links'>
      <Link to='/signup' className='header__reg'>
        Регистрация
      </Link>
      <Link to='/signin' className='header__login'>
        Войти
      </Link>
    </div>
  );
}

export default SigninNav;
