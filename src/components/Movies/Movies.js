import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import * as moviesApi from '../../utils/MoviesApi';
import { filterMovies } from '../../utils/filterMovies';

import './Movies.css';

function Movies({ onClickAddMovie, onClickDeleteMovie, savedMovies }) {
  const [searchResult, setSearchResult] = useState(
    JSON.parse(localStorage.getItem('searchResult')) || []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setSearchResult(searchResult);
  }, [searchResult]);

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
        setErrorMessage(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
        );
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
        <Preloader isActive={isLoading} />
        {errorMessage}
        <MoviesCardList
          movies={searchResult}
          savedMovies={savedMovies}
          onClickAddMovie={onClickAddMovie}
          onClickDeleteMovie={onClickDeleteMovie}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
