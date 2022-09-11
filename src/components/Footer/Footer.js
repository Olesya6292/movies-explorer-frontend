import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__content'>
        <p className='footer__copyright'>&copy;2022</p>
        <ul className='footer__links'>
          <li className='footer__link'>
            <a
              href='https://practicum.yandex.ru'
              className='footer__link-name'
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__link'>
            <a
              href='https://github.com/Olesya6292'
              className='footer__link-name'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
          <li className='footer__link'>
            <a
              href='https://vk.com/elfeeika'
              className='footer__link-name'
              target='_blank'
              rel='noreferrer'
            >
              ВКонтакте
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
