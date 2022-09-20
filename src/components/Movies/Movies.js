import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import * as moviesApi from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';

import './Movies.css';

function Movies() {
  const [searchResult, setSearchResult] = useState(
    JSON.parse(localStorage.getItem('searchResult')) || []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    setSearchResult(searchResult);
  }, [searchResult]);

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
  function filterMovies(data, searchRequest, checked) {
    function isFilter(movie) {
      if (
        movie.nameRU.toLowerCase().includes(searchRequest.toLowerCase()) &&
        ((checked && movie.duration <= 40) || !checked)
      ) {
        return true;
      }
      return false;
    }
    const result = data.filter(isFilter);
    return result;
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
      checked: localStorage.getItem('checked') === true || false,
    };
  }

  function getAllMovies() {
    return moviesApi
      .getAllMovies()
      .then((data) => {
        localStorage.setItem('allMovies', JSON.stringify(data));
        return data;
      })
      .catch((err) => console.log(err));
  }
  function handleMovieClick(movie) {
    const isSaved = savedMovies.some(
      (savedMovie) => savedMovie.movieId === movie.movieId,
    );
    if (!isSaved) {
      const savedMovie = savedMovies.find(
        (savedMovie) => savedMovie.movieId === movie.movieId,
      );
      handleClickAddMovie(savedMovie);
    } else {
      handleClickDeleteMovie(movie);
    }
  }

  function handleClickAddMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then(
        (newMovie) => setSavedMovies([...savedMovies, newMovie])
      )
      .catch((err) => console.log(err));
  }

  function handleClickDeleteMovie(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() =>
        //movie.filter((savedMovie) => savedMovie._id !== movie._id),
        setSavedMovies((state) => state.filter((savedMovie) => savedMovie._id !== movie._id))
      )
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        <SearchForm onSearchSubmit={handleSearchSubmit} setSearch={setSearch} />
        <Preloader isActive={isLoading} />
        {errorMessage}
        <MoviesCardList
          movies={searchResult}
          savedMovies={savedMovies}
          onClick={handleMovieClick}
        />
        <button
          type='button'
          className='movies__btn-next'
        >
          Ещё
        </button>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
