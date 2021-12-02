import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchMovies } from '../redux/movies/movieAction';
import './movieCard.scss';

function MovieCard() {
    const [orderBy, setorderBy] = useState('asc');
    const movieData = useSelector(state => state.movies);
    const genres = useSelector(state => state.genres.genres);
    const filteredMovieData = useSelector(state => state.movies.filteredMovies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [])

    const truncateString = (str, num) => {
        // If the length of str is less than or equal to num
        // just return str--don't truncate it.
        if (str.length <= num) {
            return str
        }
        // Return str truncated with '...' concatenated to the end of str.
        return str.slice(0, num) + '...'
    }

    const orderMovies = (movieArr) => {
        if(orderBy === 'asc') {
            return movieArr.sort((a,b) => b.popularity - a.popularity);
        } else {
            return movieArr.sort((a,b) => a.popularity - b.popularity);
        }
    }

    const getGenres = (ids) => {
        let gstr = '';
        genres.forEach(genre => {
            ids.forEach(id => {
                gstr += genre.id === id ? genre.name + ',' : '';
            });
        });

        return gstr;
    }

    const movieCard = (movieData) => {
        return (
            <div className="row">
                {orderMovies(movieData).map((eachMovie) => (
                    <div className="col-3" key={eachMovie.id}>
                        <Card>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${eachMovie.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{eachMovie.original_title}</Card.Title>
                                <Card.Text>{truncateString(eachMovie.overview, 75)}</Card.Text>
                                <Card.Text>Genres: {getGenres(eachMovie.genre_ids)}</Card.Text>
                                <Card.Text>Rating: {eachMovie.vote_average}/10</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>
            <h3>Movie list</h3>
            <div>
                <span>Order by Propulariy</span>
                <select onChange={e => setorderBy(e.target.value)}>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </select>
            </div>
            { 
                filteredMovieData && filteredMovieData.length > 0 ? movieCard(filteredMovieData) :
                movieData.movies && movieData.movies.length > 0 ? movieCard(movieData.movies) : <span>No Movies listed here</span>
            }
        </div>
    );
}

export default MovieCard;
