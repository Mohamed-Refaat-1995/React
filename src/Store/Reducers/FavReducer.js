

const INITIAL_VALUE = {
    favorites: [],
    counter: 0
}
export default function FavReducer(state = INITIAL_VALUE, action) {

    switch (action.type) {
        case "ADD_MOVIE_TO_FAVORITES":
            return {
                ...state,
                favorites: [...state.favorites, action.movie]
            }
        case "INCREMENT_COUNTER":
            return {
                ...state,
                counter: state.counter + 1
            };
        case "DECREMENT_COUNTER":
            return {
                ...state,
                counter: state.counter - 1
            };
        case "REMOVE_MOVIE_FROM_FAVORITES":
            const newFavorites = state.favorites.filter(movie => movie.id !== action.movieId);
            return {
                ...state,
                favorites: newFavorites
            };
        default:
            return state
    }
}  