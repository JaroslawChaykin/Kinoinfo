import React, {Fragment} from 'react'
import FilmItem from '../FilmItem/FilmItem';
import Loader from '../UI/Loader/Loader';
import { moviesAPI } from '../../services/MoviesService';
import classes from './FilmsList.module.scss';

const FilmsList = () => {
    const {data: movies, isLoading, error} = moviesAPI.useFetchMoviesQuery('');
    
    if (isLoading) return <Loader/>
        
    if (error) return <h1>{error}</h1>
    
    if (movies.items.length === 0) return <h1>Список фильмов пуст</h1>
    
    return (
      <Fragment>
        <div className={classes.filmsList}>
          {movies.items.map((movie, index) => <FilmItem key={movie.kinopoiskId + index} film={movie}/>)}
        </div>
      </>
    );
};

export default FilmsList;
