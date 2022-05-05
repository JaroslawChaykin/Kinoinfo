import { combineReducers } from '@reduxjs/toolkit';
import { moviesAPI } from '../services/MoviesService';
import { staffAPI } from '../services/StaffService';

export const rootReducer = combineReducers({
    [moviesAPI.reducerPath]: moviesAPI.reducer,
    [staffAPI.reducerPath]: staffAPI.reducer
})