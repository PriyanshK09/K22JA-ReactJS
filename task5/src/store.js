// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import championsReducer from './championsSlice';

export const store = configureStore({
  reducer: {
    champions: championsReducer,
  },
});