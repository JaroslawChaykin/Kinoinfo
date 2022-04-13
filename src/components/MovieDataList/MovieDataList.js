import React, { useState } from 'react';
import classes from './MovieData.module.scss';
import MovieHeader from '../MovieHeader/MovieHeader';

const MovieDataList = ({data}) => {

    const createObjectOfStaffMovie = (dataStaff) => {
        let createArrayFromObject = []
        for(let i = 0; i < Object.keys(dataStaff).length; i++) {
            createArrayFromObject.push(dataStaff[i])
        }
        return createArrayFromObject.reduce((acc, item) => {
            if (acc[item.professionKey]) {
                acc[item.professionKey].push(item)
            } else {
                acc[item.professionKey] = []
                acc[item.professionKey].push(item)
            }
            return acc
        }, {})
    }

    return (
      <div>
          <MovieHeader data={data}/>
          <div className={classes.dataList}>
              <h1 className={classes.titleAbout}>О фильме</h1>
              <div className={classes.dataColumn}>
                  <div className={classes.row}>
                      <div className={classes.title}>Год производства</div>
                      <div className={classes.value}>{data.year}</div>
                  </div>
                  <div className={classes.row}>
                      <div className={classes.title}>Страна</div>
                      <div className={classes.value}>{data.countries.map((item, index) => <span key={index}>{item.country} </span>)}</div>
                  </div>
                  <div className={classes.row}>
                      <div className={classes.title}>Жанр</div>
                      <div className={classes.value}>{data.genres.map((item, index) => <span key={index}>{item.genre}, </span>)}</div>
                  </div>
                  <div className={classes.row}>
                      <div className={classes.title}>Слоган</div>
                      <div className={classes.value}>«{data.slogan}»</div>
                  </div>
                  <div className={classes.row}>
                      <div className={classes.title}>Режиссер</div>
                      <div className={classes.value}>—</div>
                  </div>
                  <div className={classes.row}>
                      <div className={classes.title}>Сценарий</div>
                      <div className={classes.value}>—</div>
                  </div>
                  <div className={classes.row}>
                      <div className={classes.title}>Продюсер</div>
                      <div className={classes.value}>—</div>
                  </div>
                  <div className={classes.row}>
                      <div className={classes.title}>Оператор</div>
                      <div className={classes.value}>—</div>
                  </div>
                  <div className={classes.row}>
                      <div className={classes.title}>Композитор</div>
                      <div className={classes.value}>—</div>
                  </div>
                  <div className={classes.row}>
                      <div className={classes.title}>Художник</div>
                      <div className={classes.value}>—</div>
                  </div>
                  <div className={classes.row}>
                      <div className={classes.title}>Монтаж</div>
                      <div className={classes.value}>—</div>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default MovieDataList;