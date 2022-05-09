import React, { useCallback } from 'react';
import classes from './RowOfDataCategory.module.scss';
import { Link, useParams } from 'react-router-dom';

const RowOfDataCategory = ({title, data, isSlogan, noTripleDot}) => {

    const params = useParams()

    const generateLink = (entities) => {
        if (!Array.isArray(entities)) return <Link to={'/'} className={classes.link}>{entities} </Link>;

        return entities.map((item, index, arr) => {
            const comma = arr.length - 1 === index ? '' : ',';
            const value = Object.values(item);
            if (Object.keys(item).length <= 1) return <Link to={'/'} key={index} className={classes.link}>{value}{comma} </Link>;

            if(index < 3) {
                return <Link to={`/name/${item.staffId}`} key={index} className={classes.link}>{item.nameRu || item.nameEn}{comma} </Link>;
            }
        });
    }

    const generateLinkToMany = data?.length > 3 && !noTripleDot ? <Link to={`/movies/${params.id}/staff`} className={classes.link}>...</Link> : '';

    if(!data) return null

    return (
      <div className={classes.row}>
          <div className={classes.title}>{title}</div>
          <div className={classes.value}>{
              isSlogan
                ? `«${data}»`
                :
                <>
                    {generateLink(data)} {generateLinkToMany}
                </>
          }</div>
      </div>
    );
};

export default RowOfDataCategory;