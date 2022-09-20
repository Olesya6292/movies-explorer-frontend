import React from 'react';
import './MoviesCard.css';

function MoviesCard({ movie, isSaved = true, onClick, isLiked }) {

  const moviesButtonClassName = `movie__like-button ${isLiked &&'movie__like-button_active'}`;
  const getFilmDuration = (movie) => `${Math.floor(movie.duration / 60) === 0}` ? `${movie.duration % 60}м` : `${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`;
  
  return (
    <li className='movie'>
      <div className='movie__info'>
        <div className='movie__info-section'>
          <h4 className='movie__title'>{movie.nameRU}</h4>
          <p className='movie__duration'>{getFilmDuration(movie)}</p>
        </div>
        {isSaved ? (
        <button className={moviesButtonClassName} onClick={onClick}></button>) :
        (
          <button className='movie__delete-button' onClick={onClick}></button>
        )
        }
      </div>
      <a className='movie__link' href={movie.trailer || movie.trailerLink} target='_blank' rel='noreferrer'>
      <img src={`https://api.nomoreparties.co${movie.image.url}`} className='movie__image' alt='Промо'/>
      </a>
    </li>
  );
}

export default MoviesCard;
