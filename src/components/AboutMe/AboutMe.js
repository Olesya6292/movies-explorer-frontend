import React from 'react';
import photo from '../../image/фото.jpg'
import './AboutMe.css';

function AboutMe(){
    return(
<section className="student">
                <h3 className="content__title">Студент</h3>
                <div className="student__content">
                <div className="student__info">
                    <h2 className="student__name">Олеся</h2>
                    <p className="student__profession">Фронтенд-разработчик, 30 лет</p>
                    <p className="student__about">
                        Я родилась и живу в Шатуре, закончила факультет экономики МГСУ. У меня есть муж
                        и кот. Я люблю смотреть фильмы, а ещё кататься на велосипеде. Недавно начала кодить.
                        После прохождения курса по веб-разработке планирую уйти в IT.
                    </p>
                    <ul className="student__contacts">
                        <li><a href="https://vk.com/elfeeika" className="student__contact" target="_blank" rel="noreferrer">ВКонтакте</a></li>
                        <li><a href="https://github.com/Olesya6292" className="student__contact" target="_blank" rel="noreferrer">Github</a></li>   
                    </ul>
                 </div>              
                <img src={photo} alt="Фото" className="student__photo"/>
            </div>
        </section>    
    );
}

export default AboutMe;