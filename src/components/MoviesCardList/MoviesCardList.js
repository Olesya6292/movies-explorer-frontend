import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({
  movies,
  onClick,
  isSaved = true,
  savedMovies,
}) {

  function isMovieSave(movie) {
    return savedMovies.some((savedMovie) => savedMovie.movieId === movie.movieId);
  }

  return (
    <section className='movies' aria-label='Фильмы'>
      <ul className='movies__list'>
      {movies.map((movie) => (
        <MoviesCard
          key={movie.id || movie.movieId}
          movie={movie}
          isSaved={isSaved}
          onClick={onClick}
          isLiked={isMovieSave(movie)}
        />))}
      </ul>
    </section>
  );
}
