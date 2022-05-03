import { combineReducers } from '@reduxjs/toolkit';
import { moviesAPI } from '../services/MoviesService';

export const rootReducer = combineReducers({
    [moviesAPI.reducerPath]: moviesAPI.reducer
})