import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_FILMS_KEY = '7a168f15-46dd-4e8b-b8af-a46b9a0793ec';
const baseStaffUrl = 'https://kinopoiskapiunofficial.tech/api/v1';

export const staffAPI = createApi({
    reducerPath: 'staffAPI',
    baseQuery: fetchBaseQuery({baseUrl: baseStaffUrl}),
    endpoints: (build) => ({
        fetchStaff: build.query({
            query: (arg) => ({
                url: '/staff',
                params: {
                    filmId: arg
                },
                headers: {
                    'X-API-KEY': API_FILMS_KEY,
                    'Content-Type': 'application/json',
                }
            })
        }),
        fetchName: build.query({
            query: (arg) => ({
                url: `/staff/${arg}`,
                headers: {
                    'X-API-KEY': API_FILMS_KEY,
                    'Content-Type': 'application/json',
                }
            })
        })
    })
});