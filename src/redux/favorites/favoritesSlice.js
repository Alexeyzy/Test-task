import { createSlice } from '@reduxjs/toolkit';

const saved = JSON.parse(localStorage.getItem('favorites')) || [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: saved,
  reducers: {
    toggleFavorite(state, action) {
      const exists = state.find(i => i.id === action.payload.id);
      const updated = exists
        ? state.filter(i => i.id !== action.payload.id)
        : [...state, action.payload];
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;