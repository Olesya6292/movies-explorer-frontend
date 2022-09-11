import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className='tech'>
      <h3 className='content__title'>Технологии</h3>
      <div className='tech__info'>
        <h2 className='tech__header'>7 технологий</h2>
        <p className='tech__text'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <ul className='tech__btns'>
        <li className='tech__btn'>HTML</li>
        <li className='tech__btn'>CSS</li>
        <li className='tech__btn'>JS</li>
        <li className='tech__btn'>React</li>
        <li className='tech__btn'>Git</li>
        <li className='tech__btn'>Express.js</li>
        <li className='tech__btn'>mongoDB</li>
      </ul>
    </section>
  );
}
export default Techs;
