import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ isSavedMovies }) {
  return (
    <section className='movies' aria-label='Фильмы'>
      <ul className='movies__list'>
        <MoviesCard isSavedMovies={isSavedMovies} />
        <MoviesCard isSavedMovies={isSavedMovies} />
        <MoviesCard isSavedMovies={isSavedMovies} />
        <MoviesCard isSavedMovies={isSavedMovies} />
        <MoviesCard isSavedMovies={isSavedMovies} />
        <MoviesCard isSavedMovies={isSavedMovies} />
        <MoviesCard isSavedMovies={isSavedMovies} />
        <MoviesCard isSavedMovies={isSavedMovies} />
        <MoviesCard isSavedMovies={isSavedMovies} />
        <MoviesCard isSavedMovies={isSavedMovies} />
        <MoviesCard isSavedMovies={isSavedMovies} />
        <MoviesCard isSavedMovies={isSavedMovies} />
      </ul>
    </section>
  );
}
