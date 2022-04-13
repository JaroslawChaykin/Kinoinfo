import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetching } from '../../hooks/useFetching';
import FilmService from '../../API/FilmService';
import Loader from '../../components/UI/Loader/Loader';
import MovieDataList from '../../components/MovieDataList/MovieDataList';
import MovieMedia from '../../components/MovieMedia/MovieMedia';

import './MoviePage.scss'
import MovieRating from '../../components/MovieRating/MovieRating';

const MoviePage = () => {
    const [movie, setMovie] = useState(null);
    let navigate = useNavigate()
    const params = useParams();

    const [fetchMovie, isLoading, error] = useFetching(async () => {
        const responseFilm = await FilmService.getFilmById(params.id);
        const responseBoxOffice = await FilmService.getFilmBoxOffice(params.id);
        const responseStaff = await FilmService.getFilmStaff(params.id);

        setMovie({
            ...responseFilm.data,
            budget: {
                ...responseBoxOffice.data,
            },
            staff: {
                ...responseStaff.data,
            }
        });
    });
    useEffect(() => {
        fetchMovie();
    }, []);

    useEffect(() => {
        if(movie) {
            document.title = (movie.nameRu || movie.nameOriginal) + ' - Kinoinfo'
        }
    }, [movie]);

    return (
      <div className="moviePage">

          {
              !movie
                ? <Loader/>
                : <div className={'container'}>
                    <div className={'bg containerGrid containerGrid1fr2fr1fr'}>
                        <MovieMedia data={movie} />
                        <MovieDataList data={movie} />
                        <MovieRating data={movie} />
                    </div>
                </div>
          }
      </div>
    );
};

export default MoviePage;