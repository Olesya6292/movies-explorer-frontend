import React from 'react';
import { getFilmDuration } from '../../utils/movieDuration';
import { MOVIE_BASE_API } from '../../utils/constants';
import './MoviesCard.css';

function MoviesCard({ movie, isSavedMovie = false, onClickDeleteMovie, onClickAddMovie, savedMovies }) {
    
  let isSaved = false;
  let savedId;
  isSaved = savedMovies.some((item) => {
    if (item.movieId === movie.movieId) {
      savedId = item._id;
      return true;
    }
    return false;
  });

  const moviesButtonClassName = (isSavedMovie ? 'movie__delete-button' : isSaved ? 'movie__like-button_active' : 'movie__like-button');

  return (
    <li className='movie'>
      <div className='movie__info'>
        <div className='movie__info-section'>
          <h4 className='movie__title'>{movie.nameRU}</h4>
          <p className='movie__duration'>{getFilmDuration(movie)}</p>
        </div>
        <button
          className={moviesButtonClassName} onClick={() => {
            isSaved ? onClickDeleteMovie(movie._id ? movie._id  : savedId) : onClickAddMovie(movie)
          }}>
        </button>
      </div>
      <a className='movie__link' href={movie.trailerLink} target='_blank' rel='noreferrer'>
        <img src={MOVIE_BASE_API+movie.image.url} className='movie__image' alt='Промо' />
      </a>
    </li>
  );
}

export default MoviesCard;
