import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    bodyType: '',
    features: [],
  },
  reducers: {
    setLocation: (s, a) => { s.location = a.payload; },
    setBodyType: (s, a) => { s.bodyType = a.payload; },
    toggleFeature: (s, a) => {
      s.features.includes(a.payload)
        ? s.features = s.features.filter(f => f !== a.payload)
        : s.features.push(a.payload);
    },
    resetFilters: s => {
      s.location = '';
      s.bodyType = '';
      s.features = [];
    },
  },
});

export const {
  setLocation,
  setBodyType,
  toggleFeature,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;