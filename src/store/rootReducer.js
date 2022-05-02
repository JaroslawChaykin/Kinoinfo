import { combineReducers } from '@reduxjs/toolkit';
import MovieListSlice from './MovieList/MovieList.slice';

export const rootReducer = combineReducers({
    movies: MovieListSlice
})