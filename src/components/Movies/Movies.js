import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import './Movies.css';

function Movies() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        <SearchForm />
        <MoviesCardList isSavedMovies={false} />
        <button type='button' className='movies__btn-next'>
          Ещё
        </button>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
