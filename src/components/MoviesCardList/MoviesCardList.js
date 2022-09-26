import React, { useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { WIDTH_SCREEN, COUNT_CARD } from '../../utils/constants';

export default function MoviesCardList({
  movies,
  onClickAddMovie,
  onClickDeleteMovie,
  isSavedMovie = false,
  savedMovies,
}) {
  const [count, setCount] = useState(getInitialCount());
  const handleMoreClick = () => setCount(count + getMoreCount());
  const renderMovies = movies.slice(0, count);

  function getScreenWidth() {
    return Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
  }

  function getInitialCount() {
    const screenWidth = getScreenWidth();
    if (screenWidth < WIDTH_SCREEN.WIDTH_SCREEN_MIN)
      return COUNT_CARD.INITIAL_CARD_MIN;
    if (screenWidth < WIDTH_SCREEN.WIDTH_SCREEN_MEDIUM)
      return COUNT_CARD.INITIAL_CARD_MEDIUM;
    return COUNT_CARD.INITIAL_CARD_DEFAULT;
  }

  function getMoreCount() {
    const screenWidth = getScreenWidth();
    if (screenWidth <= WIDTH_SCREEN.WIDTH_SCREEN_MIN)
      return COUNT_CARD.MORE_CARD_MIN;
    if (screenWidth <= WIDTH_SCREEN.WIDTH_SCREEN_MEDIUM)
      return COUNT_CARD.MORE_CARD_MEDIUM;
    if (screenWidth <= WIDTH_SCREEN.WIDTH_SCREEN_MAX)
      return COUNT_CARD.MORE_CARD_MAX;
    return COUNT_CARD.MORE_CARD_DEFAULT;
  }

  return (
    <section className='movies' aria-label='Фильмы'>
      <ul className='movies__list'>
        {renderMovies.map((movie) => (
          <MoviesCard
            key={movie.id || movie._id}
            movie={movie}
            isSavedMovie={isSavedMovie}
            savedMovies={savedMovies}
            onClickAddMovie={onClickAddMovie}
            onClickDeleteMovie={onClickDeleteMovie}
          />
        ))}
      </ul>
      {renderMovies.length < movies.length && (
        <button
          type='button'
          className='movies__btn-next'
          onClick={handleMoreClick}
        >
          Ещё
        </button>
      )}
    </section>
  );
}
