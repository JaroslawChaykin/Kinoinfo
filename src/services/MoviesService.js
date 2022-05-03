import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_FILMS_KEY = 'f5b645fa-06a0-4b07-bb9e-15e285ff1473';

export const moviesAPI = createApi({
    reducerPath: 'moviesAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.2'}),
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
        fetchMovieById: build.query({
            query: (args) => ({
                url: `/films/${args}`,
                headers: {
                    'X-API-KEY': API_FILMS_KEY,
                    'Content-Type': 'application/json',
                }
            })
        })
    }),
});