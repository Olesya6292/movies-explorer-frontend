import React from 'react';
import { useState } from 'react';
import film from '../../image/pic__COLOR_pic.jpg'
import './MoviesCard.css';

function MoviesCard({ isSavedMovies }) {

  const [isActive, setIsActive] = useState(false);

  function onClickHandler(){
    setIsActive(!isActive);
  };

  const moviesButtonClassName = `${isSavedMovies ? 'movie__delete-button' : isActive ? 'movie__like-button movie__like-button_active' : 'movie__like-button '}`;
  return (
    <li className='movie'>
      <div className='movie__info'>
        <div className='movie__info-section'>
          <h4 className='movie__title'>33 слова о дизайне</h4>
          <p className='movie__duration'>1ч 47м</p>
        </div>
        <button className={moviesButtonClassName} onClick={onClickHandler}></button>
      </div>
      <img src={film} className='movie__image' alt='Промо'/>
    </li>
  );
}

export default MoviesCard;
