import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about'>
      <h3 className='content__title'>О проекте</h3>
      <ul className='about__info'>
        <li className='about__info-stage'>
          <h4 className='about__info-title'>Дипломный проект включал 5 этапов</h4>
          <p className='about__info-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className='about__info-stage'>
          <h4 className='about__info-title'>На выполнение диплома ушло 5 недель</h4>
          <p className='about__info-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className='about__timeline'>
        <li className='about__timeline-items about__timeline-items_type_backend'>
          <p className='about__timeline-title about__timeline-title_type_backend'>
            1 неделя
          </p>
          <p className='about__timeline-text'>Back-end </p>
        </li>
        <li className='about__timeline-items about__timeline-items_type_frontend'>
          <p className='about__timeline-title about__timeline-title_type_frontend'>
            4 недели
          </p>
          <p className='about__timeline-text'>Front-end</p>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;
