import axios from "axios"
import { FETCH_MOVIE, FILTER_MOVIES } from "../types"

export const fetchMovieRequest = movies => {
    return {
        type : FETCH_MOVIE,
        payload: movies
    }
}

export const filterMovies = filter => {
    return {
        type: FILTER_MOVIES,
        payload: filter
    }
}

export const fetchMovies = () => {
    return (dispatch) => {
        axios.get('http://localhost:8000/movies')
        .then(res => {
            const movies = res.data;
            dispatch(fetchMovieRequest(movies))
        })
    }
}

