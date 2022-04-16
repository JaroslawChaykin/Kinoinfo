import React from 'react';
import classes from './RowOfDataCategory.module.scss';
import { Link, useParams } from 'react-router-dom';

const RowOfDataCategory = ({title, data, isSlogan, noTripleDot}) => {

    const params = useParams()

    const generateLink = (entities) => {
        if (Array.isArray(entities)) {
            return entities.map((item, index, arr) => {
                let comma = arr.length - 1 === index ? '' : ','
                if (Object.keys(item).length > 1) {
                    if(index < 3) {
                        return <Link to={`/name/${item.staffId}`} key={index} className={classes.link}>{item.nameRu || item.nameEn}{comma} </Link>;
                    }
                } else {
                    const value = Object.values(item);
                    return <Link to={'/'} key={index} className={classes.link}>{value}{comma} </Link>;
                }
            });
        }
        return <Link to={'/'} className={classes.link}>{entities} </Link>;
    };

    const generateLinkToMany = data?.length > 3 && !noTripleDot ? <Link to={`/movies/${params.id}/staff`} className={classes.link}>...</Link> : ''

    return (
      <>
          {
              data
                ? <div className={classes.row}>
                    <div className={classes.title}>{title}</div>
                    <div className={classes.value}>{
                        isSlogan
                          ? `«${data}»`
                          : [generateLink(data), generateLinkToMany]
                    }</div>
                </div>
                : null
          }
      </>
    );
};

export default RowOfDataCategory;