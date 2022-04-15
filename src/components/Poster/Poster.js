import React from 'react';
import classes from './Poster.module.scss';

const Poster = ({poster, to}) => {
    return (
      <div className={classes.poster}>
          <img src={poster} alt=""/>
          <a href={to} className={classes.linkTo}>Галерея</a>
      </div>
    );
};

export default Poster;