import React from 'react';

import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__header'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <p className='portfolio__item-name'>Статичный сайт</p>
          <a
            className='portfolio__item-link'
            href='https://github.com/Olesya6292/how-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            ↗
          </a>
        </li>
        <li className='portfolio__item'>
          <p className='portfolio__item-name'>Адаптивный сайт</p>
          <a
            className='portfolio__item-link'
            href='https://github.com/Olesya6292/russian-travel'
            target='_blank'
            rel='noreferrer'
          >
            ↗
          </a>
        </li>
        <li className='portfolio__item'>
          <p className='portfolio__item-name'>Одностраничное приложение</p>
          <a
            className='portfolio__item-link'
            href='https://github.com/Olesya6292/react-mesto-api-full'
            target='_blank'
            rel='noreferrer'
          >
            ↗
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
