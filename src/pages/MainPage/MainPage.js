import React, { useEffect } from 'react';
import FilmsList from '../../components/FilmsList/FilmsList';

const MainPage = () => {
    useEffect(() => {
        document.title = 'Главная'
    }, []);
    return (
      <div>
          <FilmsList/>
      </div>
    );
};

export default MainPage;