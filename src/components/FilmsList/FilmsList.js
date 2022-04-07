import React, { useEffect, useState } from 'react';
import { useFetching } from '../../hooks/useFetching';
import FilmService from '../../API/FilmService';
import classes from './FilmsList.module.scss'
import FilmItem from '../FilmItem/FilmItem';

const FilmsList = () => {
    const [films, setFilms] = useState([]);
    const [page, setPage] = useState(1);

    const [fetchFilms, isLoading, error] = useFetching(async () => {
        const response = await FilmService.getFilms(page);
        setFilms(response.data.items);
    });

    useEffect(() => {
        fetchFilms()
    }, [])

    return (
      <div className={classes.filmsList}>
          {
              isLoading
                ? <h1>Загрузка</h1>
                : films.map((film) => <FilmItem film={film}/>)
          }
      </div>
    );
};

export default FilmsList;