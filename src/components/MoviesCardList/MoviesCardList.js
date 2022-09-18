import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({
  movies,
  isSaved,
  onClickLike,
  onClickDelete,
  isLiked,
}) {
  return (
    <section className='movies' aria-label='Фильмы'>
      <ul className='movies__list'>
      {movies.map((movie) => (
        <MoviesCard
          key={movie.id || movie.movieId}
          movie={movie}
          isSaved={isSaved}
          onClickLike={onClickLike}
          onClickDelete={onClickDelete}
          isLiked={isLiked}
        />))}
      </ul>
    </section>
  );
}
