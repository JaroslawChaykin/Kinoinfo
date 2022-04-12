import React from 'react';
import classes from './MovieMedia.module.scss'

const MovieMedia = ({data}) => {
    return (
      <div>
          <div className={classes.poster}>
              <img src={data.posterUrl} alt=""/>
          </div>
          <div className={classes.trailer}></div>
      </div>
    );
};

export default MovieMedia;