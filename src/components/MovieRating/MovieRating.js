import React from 'react';
import classes from './MovieRating.module.scss';

const MovieRating = ({data}) => {

    return (
      <div className={classes.movieRating}>
          <div className={classes.rating}>{data.ratingKinopoisk}</div>
          <div className={classes.votes}>{data.ratingKinopoiskVoteCount.toLocaleString()} оценок</div>
      </div>
    );
};

export default MovieRating;