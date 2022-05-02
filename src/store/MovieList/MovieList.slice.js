import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [],
    isLoading: false,
    error: ''
};

export const MovieListSlice = createSlice({
    name: 'movieList',
    initialState,
    reducers: {

    }
});

export default MovieListSlice.reducer