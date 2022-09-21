import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader'
import Footer from '../Footer/Footer';
import { filterMovies } from '../../utils/filterMovies';

import './SavedMovies.css';

function SavedMovies({savedMovies, onClickDeleteMovie }) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(savedMovies || []);

  useEffect(() => {
    setSearchResult(savedMovies);
  }, [savedMovies]);

  function handleSearchSubmit(searchRequest, checked) {
    setIsLoading(true);
    setSearchResult(filterMovies(savedMovies, searchRequest, checked));
    setIsLoading(false);
  }

  function resetSearch() {
    return {
      searchRequest: "",
      checked: "",
    };
  }

  function handleMovieClick(movie) {
    savedMovies.find(
        (savedMovie) => savedMovie.movieId === movie.movieId
      );
      onClickDeleteMovie(movie);

  }

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        <SearchForm onSearchSubmit={handleSearchSubmit} setSearch={resetSearch}/>
        <Preloader isActive={isLoading} />
        <MoviesCardList 
          movies={searchResult}
          savedMovies={savedMovies}
          onClick={handleMovieClick} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
