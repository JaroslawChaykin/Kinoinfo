import React, { useEffect } from 'react';
import ListSlider from '../../components/ListSlider/ListSlider';
import FilmsList from '../../components/FilmsList/FilmsList';
import Container from '../../components/Container/Container';
import classes from './MainPage.module.scss'
import useTitle from '../../hooks/useTitle';

const MainPage = () => {
    useTitle(`Главная`)
    return (
      <div className={classes.main}>
          <Container>
              <ListSlider>
                  <FilmsList />
              </ListSlider>
          </Container>
      </div>
    );
};

export default MainPage;