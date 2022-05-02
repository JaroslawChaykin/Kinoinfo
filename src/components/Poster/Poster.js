import React from 'react';
import classes from './Poster.module.scss';
import { Link } from 'react-router-dom';

const Poster = ({poster, to}) => {
    return (
      <div className={classes.poster}>
          <img src={poster} alt=""/>
          <Link to={to} className={classes.linkTo}>Галерея</Link>
      </div>
    );
};

export default Poster;