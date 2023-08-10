import { createAsyncThunk } from "@reduxjs/toolkit";
import { Category } from "@/types";
import api from "@/api/axios";

export const getAllCategories = createAsyncThunk<Category[], void>(
  "categories/all",
  async (_, thunkAPI) => {
    try {
      const response = await api.get(`${process.env.GET_CATEGORIES_URL}`);
      return response.data.data;
    } catch (error: any) {
      if (error?.response) return thunkAPI.rejectWithValue(error.response.message);
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  },
);
