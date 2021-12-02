import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchGenre } from "../redux/genre/genreAction";
import { filterMovies } from "../redux/movies/movieAction";
import "./genreFilters.scss";

function GenreFilters({genreData, fetchGenre, filterMovies}) {
    let selectedGenres = [];
    
    useEffect(() => {
        fetchGenre();
    }, []);

    const genreSelected = (val) => {
        selectedGenres = selectedGenres.indexOf(val) === -1 ? [...selectedGenres, val] : selectedGenres.filter(id => id !== val);
        filterMovies(selectedGenres);
    }

    const resetFilters = () => {
        selectedGenres = [];
        document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );
        filterMovies(selectedGenres);
    }

    return (
        <div>
            <h3>Genre list</h3>
            <button onClick={() => resetFilters()}>Reset Filter</button>
            {genreData.genres && genreData.genres.length > 0 ?
                <ListGroup>
                    {
                        genreData.genres.map((eachGenre) => <ListGroup.Item key={eachGenre.id}><input type='checkbox' value={eachGenre.id} onClick={e => genreSelected(e.target.value)}/> {eachGenre.name}</ListGroup.Item>)
                    }
                </ListGroup> : <span>No Genres Listed</span>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        genreData: state.genres
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGenre: () => dispatch(fetchGenre()),
        filterMovies: (val) => dispatch(filterMovies(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreFilters);
