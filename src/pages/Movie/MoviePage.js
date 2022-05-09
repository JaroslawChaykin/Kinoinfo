import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/UI/Loader/Loader';
import MovieDataList from '../../components/MovieDataList/MovieDataList';
import MovieMedia from '../../components/MovieMedia/MovieMedia';
import MovieRating from '../../components/MovieRating/MovieRating';

import { moviesAPI } from '../../services/MoviesService';
import { staffAPI } from '../../services/StaffService';
import './MoviePage.scss'
import useTitle from '../../hooks/useTitle';

const MoviePage = () => {
    const params = useParams();
    const {data: movieData, isLoading: isLoadingM} = moviesAPI.useFetchMovieByIDQuery(params.id)
    const {data: movieBoxOfficeData, isLoading: isLoadingBO} = moviesAPI.useFetchMovieBoxOfficeQuery(params.id)
    const {data: movieVideos, isLoading: isLoadingV} = moviesAPI.useFetchMovieVideosQuery(params.id)
    const {data: movieImages, isLoading: isLoadingI} = moviesAPI.useFetchMovieImagesQuery(params.id)
    const {data: movieStaffData, isLoading: isLoadingS} = staffAPI.useFetchStaffQuery(params.id)

    useTitle(`${movieData?.nameRu || movieData?.nameOriginal} - Kinoinfo`)

    return (
      <div className="moviePage">
          {
              [isLoadingM, isLoadingBO, isLoadingV, isLoadingI, isLoadingS].some(item => item === true)
                ? <Loader/>
                :
                <div className={'container'}>
                    <div className={'bg containerGrid containerGrid1fr2fr1fr'}>
                        <MovieMedia data={movieData} />
                        <MovieDataList data={movieData} dataStaff={movieStaffData} />
                        <MovieRating data={movieData} />
                    </div>
                </div>
          }
      </div>
    );
};

export default MoviePage;