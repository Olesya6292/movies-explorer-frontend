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

  const [count, setCount] = React.useState(getInitialCount());
  const handleMoreClick = () => setCount(count + getMoreCount());
  const renderMovies = movies.slice(0, count); 

function getScreenWidth() {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  }

function getInitialCount() {
    const screenWidth = getScreenWidth();
    if (screenWidth < 720) return 5;
    if (screenWidth < 890) return 8;
    return 12;
  }
  
function getMoreCount() {
    const screenWidth = getScreenWidth();
    if (screenWidth <= 720) return 1;
    if (screenWidth <= 890) return 2;
    if (screenWidth <= 1140) return 3;
    return 4;
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
        />))}
      </ul>
      {renderMovies.length < movies.length && (
    <button type='button' className='movies__btn-next' onClick={handleMoreClick}>
          Ещё
        </button>
      )}
    </section>
  );
}
