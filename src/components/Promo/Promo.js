import React from 'react';
import './Promo.css';
import landingLogo from '../../image/landing-logo.svg';

function Promo() {
  return (
    <section className='title'>
      <h1 className='title__header'>
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <div className='img__wrap'>
        <img src={landingLogo} alt='Логотип' className='title__image' />
      </div>
    </section>
  );
}

export default Promo;
