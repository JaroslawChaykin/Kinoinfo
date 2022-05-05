import FilmItem from '../FilmItem/FilmItem';
import Loader from '../UI/Loader/Loader';
import { moviesAPI } from '../../services/MoviesService';
import classes from './FilmsList.module.scss';

const FilmsList = () => {
    const {data: movies, isLoading, error} = moviesAPI.useFetchMoviesQuery('');
    return (
      <>
          {error && <h1>{error}</h1>}
          {isLoading
            ? <Loader/>
            :
            <>
                {
                    movies.items.length === 0
                      ?
                      <h1>Список фильмов пуст</h1>
                      :
                      <div className={classes.filmsList}>
                          {movies.items.map((movie, index) => <FilmItem key={movie.kinopoiskId + index} film={movie}/>)}
                      </div>
                }
            </>
          }
      </>
    );
};

export default FilmsList;