import FilmItem from '../FilmItem/FilmItem';
import classes from './FilmsList.module.scss'
import Loader from '../UI/Loader/Loader';
import { moviesAPI } from '../../services/MoviesService';

const FilmsList = () => {
    const {data: movies, isLoading, error} = moviesAPI.useFetchMoviesQuery('');
    return (
      <>
          {isLoading && <Loader/>}
          {error && <h1>{error}</h1>}
          <div className={classes.filmsList}>
              {movies?.items.map((movie) => <FilmItem key={movie.kinopoiskId} film={movie}/>)}
          </div>
      </>
    );
};

export default FilmsList;