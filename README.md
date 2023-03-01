# Movies Explorer (фронтенд-часть)

Репозиторий для фронтенд-части приложения с интерфейсом на React

## Приложение Movies Explorer

Приложение Movies Explorer - сервис с поиском фильмов и сохранением их в личном кабинете.

Дипломный проект Яндекс.Практикума по специальности "Веб-разработчик".

### Структура приложения

Приложение состоит из двух частей:

1. [Movies Explorer (бэкенд-часть)](https://github.com/Olesya6292/movies-explorer-api.git)
2. Movies Explorer (фронтенд-часть)

## Демо

 [GitHub Pages](https://olesya6292.github.io/movies-explorer-frontend/)

## Макет в Figma

[`figma.com/file/JPknfU9WhgZTpPvlMSmKZD/Diploma-(Copy)?node-id=932%3A4182`](<https://www.figma.com/file/JPknfU9WhgZTpPvlMSmKZD/Diploma-(Copy)?node-id=932%3A4182>)


## Используемые API

- собственное API для регистрации/авторизации и хранения сохраненных фильмов:
  `https://movies-explorer-api-pra8.onrender.com`
- публичное API для получения коллекции фильмов BeatFilm `https://api.nomoreparties.co/beatfilm-movies`

## Используемые технологии

  - HTML5, CSS3, БЭМ
  - JSX
  - normalize.css
  - @media, @keyframes, transition
  - React
  - Create React App
  - React Router 6
  - Валидация форм с помощью кастомных хуков
  - React Context
  - Защищенные роуты
  - Работа с API
  - Работы с JWT-токеном

### Инструкция по развертыванию проекта:
```bash
# клонирование репозитория
$ git clone https://github.com/Olesya6292/movies-explorer-frontend.git

# установка зависимостей
$ npm install

# запуск сборки фронтенда
$ npm run start