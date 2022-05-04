import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useFetching } from '../../hooks/useFetching';
import FilmService from '../../API/FilmService';
import Loader from '../../components/UI/Loader/Loader';
import MovieDataList from '../../components/MovieDataList/MovieDataList';
import MovieMedia from '../../components/MovieMedia/MovieMedia';
import MovieRating from '../../components/MovieRating/MovieRating';

import './MoviePage.scss'
import { moviesAPI } from '../../services/MoviesService';

const MoviePage = () => {
    const [movie, setMovie] = useState(null);
    const params = useParams();
    const navigate = useNavigate()
    const {data: movieData} = moviesAPI.useFetchMovieByIDQuery(params.id)
    const {data: movieBoxOfficeData} = moviesAPI.useFetchMovieBoxOfficeQuery(params.id)

    const [fetchMovie, isLoading, error] = useFetching(async () => {
        const responseFilm = await FilmService.getFilmById(params.id);
        const responseBoxOffice = await FilmService.getFilmBoxOffice(params.id);
        const responseStaff = await FilmService.getFilmStaff(params.id);
        const responseVideo = await FilmService.getFilmVideos(params.id);
        const responseImage = await FilmService.getFilmImages(params.id);

        setMovie({
            ...responseFilm.data,
            budget: {
                ...responseBoxOffice.data,
            },
            staff: {
                ...responseStaff.data,
            },
            media: {
                videos: {
                    ...responseVideo.data
                },
                images: {
                    ...responseImage.data
                }
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
              error &&
            <div style={{zIndex: 1, position: 'relative'}}>
                <h1>Что-то пошло не так, и данные не загрузились, выйдите пожалуйста, я оставлю вам кнопку</h1>
                <button onClick={() => navigate(-1)}>Вот кнопочка чтобы выйти</button>
            </div>
          }
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