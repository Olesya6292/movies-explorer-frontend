import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import * as moviesApi from '../../utils/MoviesApi';
import { filterMovies } from '../../utils/filterMovies';
import { MOVIE_BASE_API } from '../../utils/constants';

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
        data.map((item) => {
          const imageUrl = item.image && item.image.url;
          const thumbnailUrl = item.image && item.image.formats.thumbnail.url;

          return {
            country: item.country || 'Unknown',
            director: item.director || 'Unknown',
            duration: item.duration || -1,
            year: item.year || 'Unknown',
            description: item.description || 'Unknown',
            image:  imageUrl ? MOVIE_BASE_API + imageUrl : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png',
            trailerLink: item.trailerLink
              ? item.trailerLink
              : 'https://youtu.be/404',
            thumbnail: thumbnailUrl
              ? MOVIE_BASE_API + thumbnailUrl
              : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png',
            movieId: item.id || -1,
            nameRU: item.nameRU || 'Unknown',
            nameEN: item.nameEN || 'Unknown',
          };
        });
        localStorage.setItem('allMovies', JSON.stringify(data));
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
          onClickAddMovie={onClickAddMovie}
          onClickDeleteMovie={onClickDeleteMovie}
        />
        <button type='button' className='movies__btn-next'>
          Ещё
        </button>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
