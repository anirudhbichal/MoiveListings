import { Provider } from 'react-redux';
import './App.scss';
import GenreFilters from './components/genreFilters';
import MovieCard from './components/movieCard';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>
          <span>
            <span role="img" aria-label="Popcorn emoji">
              🍿
            </span>{' '}
            Now Playing
          </span>
        </h1>
        <section className="row">
          <div className="col-4">
            <GenreFilters />
          </div>
          <div className="col-8">
            <MovieCard />
          </div>
        </section>
      </div>
    </Provider>
  );
}

export default App;
