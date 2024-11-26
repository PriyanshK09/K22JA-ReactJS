// src/championsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  champions: [],
};

const championsSlice = createSlice({
  name: 'champions',
  initialState,
  reducers: {
    addChampion: (state, action) => {
      state.champions.push(action.payload);
    },
    updateChampion: (state, action) => {
      const index = state.champions.findIndex(champ => champ.id === action.payload.id);
      if (index !== -1) {
        state.champions[index] = action.payload;
      }
    },
    removeChampion: (state, action) => {
      state.champions = state.champions.filter(champ => champ.id !== action.payload);
    },
  },
});

export const { addChampion, updateChampion, removeChampion } = championsSlice.actions;
export default championsSlice.reducer;