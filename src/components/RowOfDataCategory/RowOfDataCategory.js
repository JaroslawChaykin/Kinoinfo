import React from 'react';
import classes from './RowOfDataCategory.module.scss';

const RowOfDataCategory = ({title, data, isSlogan}) => {

    const isArray = (entities) => {
        if (Array.isArray(entities)) {
            return entities.map((item, index) => {
                if (Object.keys(item).length > 1) {
                    return <span key={index}>{item.nameRu || item.nameEn}, </span>;
                } else {
                    const value = Object.values(item);
                    return <span key={index}>{value}, </span>;
                }

            });
        }
        return entities;
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
                : undefined
          }
      </>
    );
};

export default RowOfDataCategory;