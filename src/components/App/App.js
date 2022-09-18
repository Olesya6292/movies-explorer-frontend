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
import * as mainApi from '../../utils/MainApi';
import * as auth from '../../utils/Auth';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  const navigate = useNavigate();
  //const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      auth
        .checkToken(token)
        .then(() => {
          setLoggedIn(true);
          navigate('/movies');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfo()
        .then((res) => {
          setCurrentUser(res);
          setLoggedIn(true);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  function handleRegister(name, email, password) {
    auth
      .register(name, email, password)
      .then((data) => {
        console.log(data);
        setSuccessMessage('Вы успешно зарегистрировались')
        handleLogin(data.email, password);
      })
      .catch((err) => {
        console.log(err);
        if (err === 'Ошибка: 409') {
          setErrorMessage('Пользователь с таким email уже существует');
        } else {
        setErrorMessage('При регистрации пользователя произошла ошибка');
}
      });
  }

  function handleLogin(email, password) {
    auth
      .login(email, password)
      .then((res) => {
        localStorage.setItem('token', res.token);
        setCurrentUser(res);
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch((err) => {
        console.log(err);
        if (err === 'Ошибка: 401') {
          setErrorMessage('При авторизации произошла ошибка.Токен не передан или передан не в том формате');
        }
        else if (err === 'Ошибка: 400') {
          setErrorMessage('Вы ввели неправильный логин или пароль.');
        }
        else if (err === 'Ошибка: 404') {
          setErrorMessage('При авторизации произошла ошибка. Переданный токен некорректен');
        } else {
        setErrorMessage('При входе произошла ошибка');}
      });
  }
  function handleUpdate(name, email) {
      mainApi
      .updateUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data);
        setSuccessMessage(true);
        setErrorMessage('');
      })
      .catch((err) => {
        console.log(err);
        setSuccessMessage(false);
        if (err === 'Ошибка: 409') {
          setErrorMessage('Пользователь с таким email уже существует');
        } else {
        setErrorMessage('При обновлении профиля произошла ошибка');
      }
      });
  }

  function signOut() {
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.clear();
    navigate('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route
          path='/movies'
          element={<ProtectedRoute component={Movies} loggedIn={loggedIn} />}
        />
        <Route
          path='/saved-movies'
          element={
            <ProtectedRoute component={SavedMovies} loggedIn={loggedIn} />
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute
              component={Profile}
              loggedIn={loggedIn}
              onUpdate={handleUpdate}
              errorMessage={errorMessage}
              successMessage={successMessage}
              onLogout={signOut}
            />
          }
        />
        <Route
          path='/signin'
          element={<Login onLogin={handleLogin} errorMessage={errorMessage} />}
        />
        <Route
          path='/signup'
          element={
            <Register
              onRegister={handleRegister}
              errorMessage={errorMessage}
              successMessage={successMessage}
            />
          }
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
