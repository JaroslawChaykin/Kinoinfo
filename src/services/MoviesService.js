import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_FILMS_KEY = '7a168f15-46dd-4e8b-b8af-a46b9a0793ec';
const baseMovieUrl = `https://kinopoiskapiunofficial.tech/api/v2.2`

export const moviesAPI = createApi({
    reducerPath: 'moviesAPI',
    baseQuery: fetchBaseQuery({baseUrl: baseMovieUrl}),
    endpoints: (build) => ({
        fetchMovies: build.query({
            query: () => ({
                url: '/films',
                params: {
                  page: 2
                },
                headers: {
                    'X-API-KEY': API_FILMS_KEY,
                    'Content-Type': 'application/json',
                }
            })
        }),
        fetchMovieByID: build.query({
            query: (arg) => ({
                url: `/films/${arg}`,
                headers: {
                    'X-API-KEY': API_FILMS_KEY,
                    'Content-Type': 'application/json',
                }
            })
        }),
        fetchMovieBoxOffice: build.query({
            query: (arg) => ({
                url: `/films/${arg}/box_office`,
                headers: {
                    'X-API-KEY': API_FILMS_KEY,
                    'Content-Type': 'application/json',
                }
            })
        }),
        fetchMovieVideos: build.query({
            query: (arg) => ({
                url: `/films/${arg}/videos`,
                headers: {
                    'X-API-KEY': API_FILMS_KEY,
                    'Content-Type': 'application/json',
                }
            })
        }),
        fetchMovieImages: build.query({
            query: (arg) => ({
                url: `/films/${arg}/images`,
                headers: {
                    'X-API-KEY': API_FILMS_KEY,
                    'Content-Type': 'application/json',
                }
            })
        }),
    }),
});