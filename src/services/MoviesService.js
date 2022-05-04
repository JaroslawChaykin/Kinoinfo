import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_FILMS_KEY = '7a168f15-46dd-4e8b-b8af-a46b9a0793ec';
const baseMovieUrl = `https://kinopoiskapiunofficial.tech/api/v2.2`

export const moviesAPI = createApi({
    reducerPath: 'moviesAPI',
    baseQuery: fetchBaseQuery({baseUrl: baseMovieUrl}),
    endpoints: (build) => ({
        fetchMovies: build.query({
            query: (args) => ({
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
            query: (args) => ({
                url: `/films/${args}`,
                headers: {
                    'X-API-KEY': API_FILMS_KEY,
                    'Content-Type': 'application/json',
                }
            })
        }),
        fetchMovieBoxOffice: build.query({
            query: (args) => ({
                url: `/films/${args}/box_office`,
                headers: {
                    'X-API-KEY': API_FILMS_KEY,
                    'Content-Type': 'application/json',
                }
            })
        }),
    }),
});