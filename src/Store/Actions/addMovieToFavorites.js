

export const addMovieToFavorites = (movie) => ({
    type: "ADD_MOVIE_TO_FAVORITES",
    movie,
});

export const incrementCounter = () => ({
    type: "INCREMENT_COUNTER"
});

export const decrementCounter = () => ({
    type: "DECREMENT_COUNTER"
});

export const removeMovieFromFavorites = (movieId) => ({
    type: "REMOVE_MOVIE_FROM_FAVORITES",
    movieId
});
  