import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { moviesAPI } from '../services/MoviesService';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(moviesAPI.middleware)
})