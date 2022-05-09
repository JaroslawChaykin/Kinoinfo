import React from 'react';
import classes from './MovieData.module.scss';
import MovieHeader from '../MovieHeader/MovieHeader';
import RowOfDataCategory from '../RowOfDataCategory/RowOfDataCategory';

const MovieDataList = ({data, dataStaff}) => {

    const createObjectOfStaffMovie = (dataStaff) => {
        let arrayFromObject = []
        for(let i = 0; i < Object.keys(dataStaff).length; i++) {
            arrayFromObject.push(dataStaff[i])
        }
        return arrayFromObject.reduce((acc, item) => {
            acc[item.professionKey] ? acc[item.professionKey].push(item) : acc[item.professionKey] = [item]
            return acc
        }, {})
    }
    const {WRITER,
        OPERATOR,
        EDITOR,
        COMPOSER,
        PRODUCER_USSR,
        TRANSLATOR,
        DIRECTOR,
        DESIGN,
        PRODUCER,
        ACTOR,
        VOICE_DIRECTOR,
        UNKNOWN} = createObjectOfStaffMovie(dataStaff)
    return (
      <div>
          <MovieHeader data={data}/>
          <div className={classes.dataList}>
              <h1 className={classes.titleAbout}>О фильме</h1>
              <div className={classes.dataColumn}>
                  <RowOfDataCategory title={'Год производства'} data={data.year} />
                  <RowOfDataCategory title={'Страна'} data={data.countries} noTripleDot/>
                  <RowOfDataCategory title={'Жанр'} data={data.genres} noTripleDot/>
                  <RowOfDataCategory title={'Слоган'} data={data.slogan} isSlogan/>
                  <RowOfDataCategory title={'Режиссер'} data={DIRECTOR}/>
                  <RowOfDataCategory title={'Сценарий'} data={WRITER}/>
                  <RowOfDataCategory title={'Продюсер'} data={PRODUCER}/>
                  <RowOfDataCategory title={'Оператор'} data={OPERATOR}/>
                  <RowOfDataCategory title={'Композитор'} data={COMPOSER}/>
                  <RowOfDataCategory title={'Художник'} data={DESIGN}/>
                  <RowOfDataCategory title={'Монтаж'} data={EDITOR}/>
                  <RowOfDataCategory title={'Продюсер СССР'} data={PRODUCER_USSR}/>
                  <RowOfDataCategory title={'Переводчик'} data={TRANSLATOR}/>
                  <RowOfDataCategory title={'Актер'} data={ACTOR}/>
                  <RowOfDataCategory title={'Озвучка'} data={VOICE_DIRECTOR}/>
                  <RowOfDataCategory title={'Остальные'} data={UNKNOWN}/>
              </div>
          </div>
      </div>
    );
};

export default MovieDataList;