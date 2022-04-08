import React from 'react';
import classes from './FilmItem.module.scss'
import { Link } from 'react-router-dom';

const FilmItem = ({film}) => {
    return (
      <Link to={`/films/${film.kinopoiskId}`} >
          <div className={classes.filmCard}>
              <div className={classes.image}>
                  <img src={film.posterUrlPreview} alt={film.nameOriginal}/>
              </div>
              <div className={classes.textContent}>
                  <h3>{film.nameRu || film.nameOriginal}</h3>
                  <p>{film.year}</p>
              </div>
          </div>
      </Link>
    );
};

export default FilmItem;