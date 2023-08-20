import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/axios";
import { AddOrderDataType, Id, Ratestatic } from "@/types";


export const getAllRate = createAsyncThunk<void,any>("rates/all", async ( thunkAPI) => {
  try {
    const response = await api.get(`technical/rates?limit=10&pagination=true`);
    return response.data.data;
  } catch (error: any) {
    if (error.response) return thunkAPI.rejectWithValue(error.message);
  }
});

export const getRate = createAsyncThunk<void, Id>("rates/getRate", async (id, thunkAPI) => {
  try {
    const response = await api.get(`technical/rates/?id=${id}`);
    return response.data.data;
  } catch (error: any) {
    if (error.response) return thunkAPI.rejectWithValue(error.message);
  }
});
export const getRateStatic = createAsyncThunk<Ratestatic, Id>(
  "rarte/static",
  async (id, thunkAPI) => {
    try {
      const response = await api.post(`/technical/rate-statistics?technical=${id}`);
      return response.data.data;
    } catch (error: any) {
      if (error.response) return thunkAPI.rejectWithValue(error.message);
    }
  },
);


export const addRate = createAsyncThunk<void, any>(
  "rate/add",
  async (data, thunkAPI) => {
    try {
      const response = await api.post(`technical/rates`, data);
      return response.data.data;
    } catch (error: any) {
      if (error.response) return thunkAPI.rejectWithValue(error.message);
    }
  },
);