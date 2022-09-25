import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import { filterMovies } from '../../utils/filterMovies';
import { SEARCH_ERRORS } from '../../utils/constants';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import './SavedMovies.css';

function SavedMovies({ savedMovies, onClickDeleteMovie, onClickAddMovie }) {
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
      searchRequest: '',
      checked: '',
    };
  }

  return (
    <>
      <Header />
      <main>
        <SearchForm
          onSearchSubmit={handleSearchSubmit}
          setSearch={resetSearch}
        />
        {isLoading ? (
          <Preloader />
        ) : searchResult.length === 0 ? (
          <ErrorMessage text={SEARCH_ERRORS.NOT_FOUND} />
        ) : (
          <MoviesCardList
            movies={searchResult}
            savedMovies={savedMovies}
            onClickAddMovie={onClickAddMovie}
            onClickDeleteMovie={onClickDeleteMovie}
            isSavedMovie
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
