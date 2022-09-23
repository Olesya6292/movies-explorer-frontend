import React from 'react';
import { getFilmDuration } from '../../utils/movieDuration';
import { MOVIE_BASE_API } from '../../utils/constants';
import './MoviesCard.css';

function MoviesCard({ movie, isSavedMovie = false, onClickDeleteMovie, onClickAddMovie, savedMovies }) {

  const isSaved = savedMovies.some((savedMovie) => savedMovie.movieId === movie.id);
  const likeBtnClass = isSaved ? 'movie__like-button movie__like-button_active' : 'movie__like-button'
  
  const handleSaveClick = () => {
    if (isSaved) {
      onClickDeleteMovie(savedMovies.filter((m) => m.movieId === movie.id)[0]);
    } else {
      onClickAddMovie(movie);
    }
  };

  const handleDeleteMovie = () => onClickDeleteMovie(movie);

  return (
    <li className='movie'>
      <div className='movie__info'>
        <div className='movie__info-section'>
          <h4 className='movie__title'>{movie.nameRU}</h4>
          <p className='movie__duration'>{getFilmDuration(movie)}</p>
        </div>
        {isSavedMovie ? (
          <button className='movie__delete-button' onClick={handleDeleteMovie}>
          </button>) 
          : (
          <button className={likeBtnClass} onClick={handleSaveClick}>
          </button>
        )}
      </div>
      <a className='movie__link' href={movie.trailerLink}  target='_blank' rel='noreferrer'>
        <img src={isSavedMovie ? movie.image : MOVIE_BASE_API + movie.image.url } className='movie__image' alt='Промо' />
      </a>
    </li>
  );
}

export default MoviesCard;
