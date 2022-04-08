import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetching } from '../../hooks/useFetching';
import FilmService from '../../API/FilmService';
import Loader from '../../components/UI/Loader/Loader';

const MoviePage = () => {

    const [movie, setMovie] = useState(null);
    let navigate = useNavigate()
    const params = useParams();

    const [fetchMovie, isLoading, error] = useFetching(async () => {
        const response = await FilmService.getFilmById(params.id);
        setMovie(response.data);
    });

    useEffect(() => {
        fetchMovie();
    }, []);

    return (
      <div>
          <button onClick={() => navigate(-1)}>Go back</button>
          {
              !movie
                ? <Loader/>
                : <div>
                    <h1>{movie.nameRu || movie.nameOriginal}</h1>
                    <ul>
                        {
                            movie.genres.map((item, index) => {
                                return <li key={index}>{item.genre}</li>;
                            })
                        }
                    </ul>
                </div>
          }
      </div>
    );
};

export default MoviePage;