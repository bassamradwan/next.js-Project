import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/axios";
import { Id } from "@/types";


export const getAllComments = createAsyncThunk<any, Id>("comments/all", async (id, thunkAPI) => {
  try {
    const response = await api.get(`comments?blog=${id}`);
    return response.data.data;
  } catch (error: any) {
    if (error.response) return thunkAPI.rejectWithValue(error.message);
  }
});

export const addComments = createAsyncThunk<void, any>(
  "comments/add",
  async (data, thunkAPI) => {
    try {
       await api.post(`comments`, data);
    } catch (error: any) {
      if (error.response) return thunkAPI.rejectWithValue(error.message);
    }
  },
);
