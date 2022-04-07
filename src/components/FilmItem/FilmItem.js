import React from 'react';
import classes from './FilmItem.module.scss'

const FilmItem = ({film}) => {
    return (
      <div className={classes.filmCard} key={film.kinopoiskId}>
          <div className={classes.image}>
              <img src={film.posterUrlPreview} alt={film.nameOriginal}/>
          </div>
          <div className={classes.textContent}>
              <h3>{film.nameRu || film.nameOriginal}</h3>
              <p>{film.year}</p>
          </div>
      </div>
    );
};

export default FilmItem;