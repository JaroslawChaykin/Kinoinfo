import './App.scss';
import { useFetching } from './hooks/useFetching';
import FilmService from './API/FilmService';
import { useEffect, useState } from 'react';

function App() {
    const [films, setFilms] = useState([]);
    const [page, setPage] = useState(1);

    const [fetchFilms, isLoading, error] = useFetching(async () => {
        const response = await FilmService.getFilms(page);
        setFilms(response.data.items);
    });

    useEffect(() => {
        fetchFilms()
    }, [])

    return (
      <div className="App">
          {
              isLoading
                ? <h1>Загрузка</h1>
                : films.map((film) => (
                  <div className={'film-card'} key={film.kinopoiskId}>
                      <div className="image">
                          <img src={film.posterUrlPreview} alt={film.nameOriginal}/>
                      </div>
                      <div className={'text-content'}>
                          <h3>{film.nameRu || film.nameOriginal}</h3>
                          <p>{film.year}</p>
                      </div>
                  </div>
                ))
          }
      </div>
    );
}

export default App;
