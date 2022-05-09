import React from 'react';
import classes from './Container.module.scss'

const Container = ({children}) => {
    return (
      <div className={classes.container}>
          <div className={classes.children}>
              {children}
          </div>
      </div>
    );
};

export default Container;