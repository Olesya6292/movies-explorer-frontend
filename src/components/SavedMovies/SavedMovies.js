import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import './SavedMovies.css';

function SavedMovies() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        <SearchForm />
        <MoviesCardList isSavedMovies={true} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
