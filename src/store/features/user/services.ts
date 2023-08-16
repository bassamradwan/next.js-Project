import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/axios";
import { Profile } from "@/types";

export const getProfileInfo = createAsyncThunk("user/profile", async (_, thunkAPI) => {
  try {
    const token = document.cookie.split("=")[1];

    const response = await api.get("auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error: any) {
    thunkAPI.rejectWithValue(error.response.message);
  }
});

export const updateProfileInfo = createAsyncThunk<void, Profile>("user/update", async (data, thunkAPI) => {
  try {
    const response = await api.post("auth/profile", data);
    return response.data;
  } catch (error: any) {
    thunkAPI.rejectWithValue(error.response.message);
  }
});

export const loginUser = createAsyncThunk<void, Profile>("user/update", async (data, thunkAPI) => {
  try {
    const response = await api.post("auth/login", data);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
