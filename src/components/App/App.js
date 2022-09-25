import { useEffect, useState } from 'react';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import { ERRORS, REQUEST_ERRORS } from '../../utils/constants';
import * as mainApi from '../../utils/MainApi';
import * as auth from '../../utils/Auth';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfo()
        .then((res) => {
          setCurrentUser(res);
          setLoggedIn(true);
        })
        .catch((err) => console.log(err));
      mainApi
        .getSavedMovies()
        .then((res) => {
          setSavedMovies(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  function handleRegister(name, email, password) {
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage(false);
    auth
      .register(name, email, password)
      .then((data) => {
        setIsLoading(false);
        setSuccessMessage(true);
        setTimeout(() => setSuccessMessage(false), 2000);
        handleLogin(data.email, password);
      })
      .catch((err) => {
        console.log(err);
        if (err === ERRORS.CONFLICT) {
          setErrorMessage(REQUEST_ERRORS.REGISTER_409);
        } else {
          setErrorMessage(REQUEST_ERRORS.REGISTER_DEFAULT);
        }
        setIsLoading(false);
      });
  }

  function handleLogin(email, password) {
    setIsLoading(true);
    setErrorMessage('');
    auth
      .login(email, password)
      .then((res) => {
        localStorage.setItem('token', res.token);
        setIsLoading(false);
        setCurrentUser(res);
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch((err) => {
        if (err === ERRORS.UNAUTHORIZED) {
          setErrorMessage(REQUEST_ERRORS.LOGIN_401);
        } else if (err === ERRORS.SERVER) {
          setErrorMessage(REQUEST_ERRORS.SERVER_500);
        } else {
          setErrorMessage(REQUEST_ERRORS.LOGIN_DEFAULT);
        }
        setIsLoading(false);
      });
  }

  function handleUpdate(data) {
    setCurrentUser(data);
  }

  function signOut() {
    setLoggedIn(false);
    setCurrentUser(null);
    localStorage.clear();
    navigate('/');
  }

  const handleSaveMovie = (movie) => {
    mainApi
      .saveMovie(movie)
      .then((data) => {
        setSavedMovies([data, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteMovie = (movie) => {
    const savedMovie = savedMovies.find(
      (item) => item.movieId === movie.movieId
    );
    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        const newMoviesList = savedMovies.filter(
          (item) => item._id !== savedMovie._id
        );
        setSavedMovies(newMoviesList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route
            path='/movies'
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies
                  onClickAddMovie={handleSaveMovie}
                  onClickDeleteMovie={handleDeleteMovie}
                  savedMovies={savedMovies}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies
                  onClickAddMovie={handleSaveMovie}
                  onClickDeleteMovie={handleDeleteMovie}
                  savedMovies={savedMovies}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile onUpdate={handleUpdate} onLogout={signOut} />
              </ProtectedRoute>
            }
          />
          <Route
            path='/signin'
            element={
              <Login
                onLogin={handleLogin}
                errorMessage={errorMessage}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path='/signup'
            element={
              <Register
                onRegister={handleRegister}
                errorMessage={errorMessage}
                successMessage={successMessage}
                isLoading={isLoading}
              />
            }
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
