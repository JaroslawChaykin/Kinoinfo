import React from 'react';
import classes from './RowOfDataCategory.module.scss';
import { Link } from 'react-router-dom';

const RowOfDataCategory = ({title, data, isSlogan}) => {

    const isArray = (entities) => {
        if (Array.isArray(entities)) {
            return entities.map((item, index, arr) => {
                let comma = arr.length - 1 === index ? '' : ','
                if (Object.keys(item).length > 1) {
                    return <Link to={'/'} key={index} className={classes.link}>{item.nameRu || item.nameEn}{comma} </Link>;

                } else {
                    const value = Object.values(item);
                    return <Link to={'/'} key={index} className={classes.link}>{value}{comma} </Link>;
                }

            });
        }
        return <Link to={'/'} className={classes.link}>{entities} </Link>;
    };

    return (
      <>
          {
              data
                ? <div className={classes.row}>
                    <div className={classes.title}>{title}</div>
                    <div className={classes.value} onClick={(e) => {
                        e.currentTarget.style.maxHeight === '100%' ?
                          e.currentTarget.style.maxHeight = '20px' :
                          e.currentTarget.style.maxHeight = '100%';
                    }
                    }>{
                        isSlogan
                          ? `«${data}»`
                          : isArray(data)
                    }</div>
                </div>
                : null
          }
      </>
    );
};

export default RowOfDataCategory;