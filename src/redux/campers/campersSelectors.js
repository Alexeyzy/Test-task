export const selectCampers = state => state.campers.items;
export const selectCurrentCamper = state => state.campers.current;
export const selectIsLoading = state => state.campers.isLoading;
export const selectError = state => state.campers.error;

export const selectFilteredCampers = state => {
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
      features.every(feature => camper[feature]);

    return byLocation && byVehicle && byFeatures;
  });
};