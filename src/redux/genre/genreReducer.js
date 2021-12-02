import { FETCH_GENRE, GENRE_SELECTED } from "../types"

const initialGenreState = {
    loading: false,
    genres: [],
    selectedGenres: []
}

const genreReducer = (state = initialGenreState, action) => {
    switch(action.type) {
        case FETCH_GENRE: return {
            ...state,
            genres: action.payload
        }
        case GENRE_SELECTED: return {
            ...state,
            selectedGenres: state.selectedGenres.indexOf(action.payload) === -1 ?
                [...state.selectedGenres, action.payload] : state.selectedGenres.filter(id => id !== action.payload)
        }
        default: return state
    }
}

export default genreReducer