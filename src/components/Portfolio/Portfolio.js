import React from 'react';

import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__header'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a
            className='portfolio__item-name'
            href='https://github.com/Olesya6292/how-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
            <span className='portfolio__item-link'>↗</span>
          </a>
        </li>
        <li className='portfolio__item'>
          <a
            className='portfolio__item-name'
            href='https://github.com/Olesya6292/russian-travel'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
            <span className='portfolio__item-link'>↗</span>
          </a>
        </li>
        <li className='portfolio__item'>
          <a
            className='portfolio__item-name'
            href='https://github.com/Olesya6292/react-mesto-api-full'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
            <span className='portfolio__item-link'>↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
