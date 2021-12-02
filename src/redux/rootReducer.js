import { combineReducers } from "redux";
import genreReducer from "./genre/genreReducer";
import movieReducer from "./movies/movieReducer";

const rootReducer = combineReducers({
    genres: genreReducer,
    movies: movieReducer
})

export default rootReducer;