import React, { useEffect, useState } from 'react';
import { useFetching } from '../../hooks/useFetching';
import FilmService from '../../API/FilmService';
import FilmItem from '../FilmItem/FilmItem';
import classes from './FilmsList.module.scss'
import Loader from '../UI/Loader/Loader';

const FilmsList = () => {
    const [films, setFilms] = useState([]);

    const [fetchFilms, isLoading, error] = useFetching(async () => {
        const response = await FilmService.getFilms();
        setFilms(response.data.items);
    });

    useEffect(() => {
        fetchFilms()
    }, [])

    return (
      <div className={classes.filmsList}>
          {
              isLoading
                ? <Loader />
                : films.map((film) => <FilmItem key={film.kinopoiskId} film={film}/>)
          }
      </div>
    );
};

export default FilmsList;