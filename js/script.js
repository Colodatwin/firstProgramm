"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Один за последних просмотренных фильмов?', ''),
      b = prompt('Насколько оцените его?', ''),
      c = prompt('Один за последних просмотренных фильмов?', ''),
      d = prompt('Насколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);