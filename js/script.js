"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один за последних просмотренных фильмов?', '').trim(),
                b = prompt('Насколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                console.log('succes!')
                personalMovieDB.movies[a] = b;
            } else {
                console.log('eror');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            // const a = prompt(`Ваш любимый жанр под номером ${i + 1}?`, '');
            // if (a != null &&  a != '') {
            //     personalMovieDB.genres[i] = a;
            // } else {
            //     i--;
            // }
            let a = prompt(`Введите через запятую ваши любимые жанры`, '');
            // с  .toLowerCase будет ошибка в проверке
            if (a === null || a === '') {
                console.log('Ошибка!');
                i--;
            } else {
                personalMovieDB.genres = a.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((movie, num) => {
            console.log(`Любимый жанр #${num + 1} - это ${movie}`)
        })
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyDB(personalMovieDB.privat);

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.writeYourGenres();

