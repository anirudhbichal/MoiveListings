import { FETCH_MOVIE, FILTER_MOVIES } from "../types"

const initialMovieState = {
    loading: false,
    movies: [],
    filteredMovies: []
}

const movieReducer = (state = initialMovieState, action) => {
    switch(action.type) {
        case FETCH_MOVIE: return {
            ...state,
            movies: action.payload
        }
        case FILTER_MOVIES: {
            let allMovies = [...state.movies];
            let filteredMoviesArr = [];
            filteredMoviesArr = allMovies.filter(eachMovie => {
                return action.payload.map(x => Number(x)).some(id => eachMovie.genre_ids.includes(Number(id)))
            });
            return {
                ...state,
                filteredMovies: filteredMoviesArr
            }
        }
        default: return state
    }
}

export default movieReducer