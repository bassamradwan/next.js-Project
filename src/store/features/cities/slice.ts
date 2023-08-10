import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllCities } from "./services";
import { City } from "@/types";

export interface citiesState {
  cities: City[];
  loading: boolean;
  error: string | null;
}

const initialState: citiesState = {
  cities: [],
  loading: false,
  error: null,
};

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllCities.fulfilled, (state, action: PayloadAction<City[]>) => {
      state.cities = action.payload;
    });
  },
});

export default citiesSlice.reducer;
