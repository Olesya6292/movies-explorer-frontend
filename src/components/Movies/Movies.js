import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Preloader from '../Preloader/Preloader';
import * as moviesApi from '../../utils/MoviesApi';
import { filterMovies } from '../../utils/filterMovies';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { SEARCH_ERRORS } from '../../utils/constants';

import './Movies.css';

function Movies({ onClickAddMovie, onClickDeleteMovie, savedMovies }) {
  const [searchResult, setSearchResult] = useLocalStorage('searchResult', []);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setSearchResult(searchResult);
  }, [searchResult, setSearchResult]);

  function getAllMovies() {
    return moviesApi
      .getAllMovies()
      .then((data) => {
        localStorage.setItem('allMovies', JSON.stringify(data));
        return data;
      })
      .catch((err) => console.log(err));
  }

  function handleSearchSubmit(searchRequest, checked) {
    setIsLoading(true);
    setErrorMessage('');
    handleMoviesSearch(searchRequest, checked);
  }

  function handleMoviesSearch(searchRequest, checked) {
    const movies = localStorage.getItem('allMovies');
    if (movies) {
      const data = JSON.parse(movies);
      setSearchResult(filterMoviesSearch(data, searchRequest, checked));
      setIsLoading(false);
      return;
    }
    getAllMovies()
      .then((data) => {
        setSearchResult(filterMoviesSearch(data, searchRequest, checked));
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setErrorMessage(SEARCH_ERRORS.NOT_GET_MOVIES);
      });
  }

  function filterMoviesSearch(data, searchRequest, checked) {
    const filtredMovies = filterMovies(data, searchRequest, checked);
    setLocalStorage(filtredMovies, searchRequest, checked);
    return filtredMovies;
  }

  function setLocalStorage(data, searchRequest, checked) {
    localStorage.setItem('searchResult', JSON.stringify(data));
    localStorage.setItem('searchRequest', searchRequest);
    localStorage.setItem('checked', checked);
  }

  function setSearch() {
    return {
      searchRequest: localStorage.getItem('searchRequest') || '',
      checked: localStorage.getItem('checked') === 'true' || false,
    };
  }
  return (
    <>
      <Header />
      <main>
        <SearchForm onSearchSubmit={handleSearchSubmit} setSearch={setSearch} />
        {localStorage.getItem('searchRequest') &&
          (errorMessage ? (
            <ErrorMessage text={errorMessage} />
          ) : isLoading ? (
            <Preloader />
          ) : searchResult.length === 0 ? (
            <ErrorMessage text={SEARCH_ERRORS.NOT_FOUND} />
          ) : (
            <MoviesCardList
              movies={searchResult}
              savedMovies={savedMovies}
              onClickAddMovie={onClickAddMovie}
              onClickDeleteMovie={onClickDeleteMovie}
            />
          ))}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
