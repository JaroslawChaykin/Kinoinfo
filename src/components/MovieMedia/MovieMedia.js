import React from 'react';
import classes from './MovieMedia.module.scss'
import Poster from '../Poster/Poster';

const MovieMedia = ({data}) => {
    return (
      <div>
          <Poster poster={data.posterUrl} to={`/movies/${data.kinopoiskId}/gallery`}/>
          <div className={classes.trailer}></div>
      </div>
    );
};

export default MovieMedia;