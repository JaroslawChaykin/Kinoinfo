import React, { useEffect } from 'react';
import FilmsList from '../../components/FilmsList/FilmsList';

const MainPage = () => {
    useEffect(() => {
        document.title = 'Главная'
    }, []);
    return (
      <div style={{margin: '0 auto', width: '1170px', marginTop: '50px'}}>
          <FilmsList/>
      </div>
    );
};

export default MainPage;