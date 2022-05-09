import React, { useEffect } from 'react';
import ListSlider from '../../components/ListSlider/ListSlider';
import FilmsList from '../../components/FilmsList/FilmsList';

const MainPage = () => {
    useEffect(() => {
        document.title = 'Главная'
    }, []);
    return (
      <div style={{margin: '0 auto', width: '1170px', marginTop: '50px'}}>
          <ListSlider>
              <FilmsList />
          </ListSlider>
      </div>
    );
};

export default MainPage;