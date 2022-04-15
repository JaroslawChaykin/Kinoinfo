import React from 'react';
import classes from './MovieHeader.module.scss';
import { ratingAge } from '../../utils';

const MovieHeader = ({data}) => {
    const movieLocalization = data.nameRu || data.nameOriginal

    const movieName = () => {
        return `${movieLocalization} 
        (${data.serial ? `сериал ${data.startYear} - ${data.endYear ? data.endYear : '...'}` : data.year})`
    }

    return (
      <div className={classes.movieTitle}>
          <div className={classes.title}>
              {
                  movieName()
              }
          </div>
          <div className={classes.nameOriginal}>
              {
                  data.nameRu && data.nameOriginal ? <span className={classes.name}>{data.nameOriginal}</span> : null
              }

              {
                data.ratingAgeLimits &&
                <span className={classes.ratingAge}>{ratingAge(data.ratingAgeLimits)}+</span>
              }
          </div>
          <div className={classes.description}>
              {data.shortDescription}
          </div>
      </div>
    );
};

export default MovieHeader;