import { BASE_URL } from './constants';
import handleResponse from './handleResponse';

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  }).then(handleResponse);
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(handleResponse);
};
