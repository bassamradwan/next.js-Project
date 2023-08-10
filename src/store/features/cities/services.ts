import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/axios";
import { City } from "@/types";

export const getAllCities = createAsyncThunk<City[], void>("cities/all", async (data, thunkAPI) => {
  try {
    const response = await api.get(`${process.env.GET_CITIES_URL}`);
    return response.data.data;
  } catch (error: any) {
    if (error.response) return thunkAPI.rejectWithValue(error.response.message);
    return thunkAPI.rejectWithValue("Something went wrong");
  }
});
