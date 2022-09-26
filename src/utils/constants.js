export const BASE_URL = 'https://api.diploma.ionova.nomoredomains.sbs';
export const BEATFILM_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const MOVIE_BASE_API = 'https://api.nomoreparties.co/';

export const SEARCH_PARAMS = {
  SHORT_DURATION: 40,
  SEARCH_ERROR: 'Нужно ввести ключевое слово',
};

export const SEARCH_ERRORS = {
  NOT_FOUND: 'Ничего не найдено',
  NOT_GET_MOVIES:
    'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
};

export const REQUEST_ERRORS = {
  SERVER_500: 'На сервере произошла ошибка',

  REGISTER_409: 'Пользователь с таким email уже существует.',
  REGISTER_DEFAULT: 'При регистрации пользователя произошла ошибка.',

  LOGIN_401: 'Вы ввели неправильный логин или пароль.',
  LOGIN_DEFAULT: 'При входе произошла ошибка.',

  UPDATE_409: 'Пользователь с таким email уже существует.',
  UPDATE_DEFAULT: 'При обновлении профиля произошла ошибка.',
};

export const ERRORS = {
  SERVER: 'Ошибка: 500',
  UNAUTHORIZED: 'Ошибка: 401',
  CONFLICT: 'Ошибка: 409',
};

export const WIDTH_SCREEN = {
  WIDTH_SCREEN_MAX: 1140,
  WIDTH_SCREEN_MEDIUM: 890,
  WIDTH_SCREEN_MIN: 720,
};

export const COUNT_CARD = {
  INITIAL_CARD_DEFAULT: 12,
  INITIAL_CARD_MEDIUM: 8,
  INITIAL_CARD_MIN: 5,
  MORE_CARD_DEFAULT: 3,
  MORE_CARD_MAX: 3,
  MORE_CARD_MEDIUM: 2,
  MORE_CARD_MIN: 1,
};
