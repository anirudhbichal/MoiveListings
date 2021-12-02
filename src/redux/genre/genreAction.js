import axios from "axios"
import { FETCH_GENRE, GENRE_SELECTED } from "../types"

export const fetchGenreRequest = genres => {
    return {
        type : FETCH_GENRE,
        payload: genres
    }
}

export const genreSelected = selectedGenreIndex => {
    return {
        type : GENRE_SELECTED,
        payload: selectedGenreIndex
    }
}

export const fetchGenre = () => {
    return (dispatch) => {
        axios.get('http://localhost:8000/genres')
        .then(res => {
            const genres = res.data;
            dispatch(fetchGenreRequest(genres))
        })
    }
}

