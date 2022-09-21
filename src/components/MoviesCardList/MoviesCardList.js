import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({
  movies,
  onClickAddMovie,
  onClickDeleteMovie,
  isSavedMovie = false,
  savedMovies,
}) {
 
    return (
    <section className='movies' aria-label='Фильмы'>
      <ul className='movies__list'>
      {movies.map((movie) => (
        <MoviesCard
          key={movie.id}
          movie={movie}
          isSavedMovie={isSavedMovie}
          savedMovies={savedMovies}
          onClickAddMovie={onClickAddMovie}
          onClickDeleteMovie={onClickDeleteMovie}
        />))}
      </ul>
    </section>
  );
}
