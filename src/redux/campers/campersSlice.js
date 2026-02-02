import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCampersApi, fetchCamperByIdApi } from '../../api/campersApi';

export const getCampers = createAsyncThunk(
  'campers/getAll',
  async (_, { getState }) => {
    const filters = getState().filters;
    return await fetchCampersApi(filters);
  }
);

export const getCamperDetails = createAsyncThunk(
  'campers/getById',
  async id => fetchCamperByIdApi(id)
);

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    selected: null,
    loading: false,
  },
  reducers: {
    resetCampers(state) {
      state.items = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCampers.pending, s => { s.loading = true; })
      .addCase(getCampers.fulfilled, (s, a) => {
        s.items = a.payload;
        s.loading = false;
      })
      .addCase(getCamperDetails.fulfilled, (s, a) => {
        s.selected = a.payload;
      });
  },
});

export const { resetCampers } = campersSlice.actions;
export default campersSlice.reducer;