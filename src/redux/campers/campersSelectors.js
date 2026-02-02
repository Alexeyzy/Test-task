import { createAsyncThunk } from "@reduxjs/toolkit";

export const selectCampers = state => state.campers.items;

export const selectFilteredCampers = (state) => {
  const { items } = state.campers;
  const { location, vehicleType, features } = state.filters;

  return items.filter(camper => {
    const byLocation =
      !location ||
      camper.location.toLowerCase().includes(location.toLowerCase());

    const byVehicle =
      !vehicleType || camper.vehicleType === vehicleType;

    const byFeatures =
      features.length === 0 ||
      features.every(f => camper[f]);

    return byLocation && byVehicle && byFeatures;
  });
};