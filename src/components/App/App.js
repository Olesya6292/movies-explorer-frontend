//import { useEffect, useState } from 'react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';

import './App.css';

function App() {
  //const [currentUser, setCurrentUser] = useState({});

  return (
    <CurrentUserContext.Provider value={''}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<ProtectedRoute component={Movies} />} />
        <Route
          path='/saved-movies'
          element={<ProtectedRoute component={SavedMovies} />}
        />
        <Route
          path='/profile'
          element={<ProtectedRoute component={Profile} />}
        />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
