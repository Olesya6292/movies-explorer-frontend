import { BEATFILM_URL } from './constants';
import handleResponse from './handleResponse'


export const getAllMovies = () => {
    return fetch(`${BEATFILM_URL}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(handleResponse)
  };