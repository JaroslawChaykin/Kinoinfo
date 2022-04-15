import React from 'react';
import classes from './MovieRating.module.scss';
import { dynamicColorRating } from '../../utils';

const MovieRating = ({data}) => {

    return (
      <div className={classes.movieRating}>
          <div className={dynamicColorRating(data.ratingKinopoisk)}>{data.ratingKinopoisk}</div>
          <div className={classes.votes}>{data.ratingKinopoiskVoteCount.toLocaleString()} оценок</div>
      </div>
    );
};

export default MovieRating;