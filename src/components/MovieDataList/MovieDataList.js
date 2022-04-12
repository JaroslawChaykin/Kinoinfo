import React from 'react';
import classes from './MovieData.module.scss';
import { ratingAge } from '../../utils';

const MovieDataList = ({data}) => {

    const movieLocalization = data.nameRu || data.nameOriginal

    const movieName = () => {
        return `${movieLocalization} 
        (${data.serial ? `сериал ${data.startYear} - ${data.endYear ? data.endYear : '...'}` : data.year})`
    }

    return (
      <div className={classes.dataList}>
          <div className={classes.movieTitle}>
              <div className={classes.title}>
                  {
                      movieName()
                  }
              </div>
              <div className={classes.nameOriginal}>
                  {data.nameRu ? data.nameOriginal : ''}
                  {
                    data.ratingAgeLimits &&
                      <span className={classes.ratingAge}>{ratingAge(data.ratingAgeLimits)}+</span>
                  }
              </div>
              <div className={classes.description}>
                  {data.shortDescription}
              </div>
          </div>
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
    );
};

export default MovieDataList;