// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directorsList = moviesArray.map((movie) => {
    return movie.director;
  });
  return directorsList;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let SpielbergDramaMovies = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });

  if (SpielbergDramaMovies.length === 0) {
    return 0;
  } else {
    return SpielbergDramaMovies.length;
  }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let totalScore = 0;

  for (let i = 0; i < moviesArray.length; i++) {
    const movieScore = moviesArray[i].score;
    if (typeof movieScore === "number" && !isNaN(movieScore)) {
      totalScore = totalScore + movieScore;
    }
  }

  let average = totalScore / moviesArray.length;

  return parseFloat(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });

  if (dramaMovies.length === 0) {
    return 0;
  }

  let dramaScore = 0;

  for (let i = 0; i < dramaMovies.length; i++) {
    const movieScore = dramaMovies[i].score;
    if (typeof movieScore === "number" && !isNaN(movieScore)) {
      dramaScore = dramaScore + movieScore;
    }
  }

  let average = dramaScore / dramaMovies.length;

  return parseFloat(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newMoviesArray = moviesArray.slice();

  newMoviesArray.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return newMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newMoviesArray = moviesArray.slice();

  newMoviesArray.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  const titlesOnlyArray = newMoviesArray.map((movie) => {
    return movie.title;
  });

  const finalResult = titlesOnlyArray.slice(0, 20);

  return finalResult;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
