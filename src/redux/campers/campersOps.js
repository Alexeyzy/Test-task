import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCampersApi, fetchCamperByIdApi } from "../../api/campersApi";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkAPI) => {
    try {
      return await fetchCampersApi();
    } catch {
      return thunkAPI.rejectWithValue("Fetch campers failed");
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchById",
  async (id, thunkAPI) => {
    try {
      return await fetchCamperByIdApi(id);
    } catch {
      return thunkAPI.rejectWithValue("Fetch camper failed");
    }
  }
);

