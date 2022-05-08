import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_FILMS_KEY = '7a168f15-46dd-4e8b-b8af-a46b9a0793ec';
const baseMovieUrl = `https://kinopoiskapiunofficial.tech/api/v2.2`
const globalHeaders = {
    'X-API-KEY': API_FILMS_KEY,
    'Content-Type': 'application/json',
}

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
                headers: globalHeaders
            })
        }),
        fetchMovieByID: build.query({
            query: (arg) => ({
                url: `/films/${arg}`,
                headers: globalHeaders
            })
        }),
        fetchMovieBoxOffice: build.query({
            query: (arg) => ({
                url: `/films/${arg}/box_office`,
                headers: globalHeaders
            })
        }),
        fetchMovieVideos: build.query({
            query: (arg) => ({
                url: `/films/${arg}/videos`,
                headers: globalHeaders
            })
        }),
        fetchMovieImages: build.query({
            query: (arg) => ({
                url: `/films/${arg}/images`,
                headers: globalHeaders
            })
        }),
    }),
});