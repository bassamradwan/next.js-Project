import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/axios";
import { AddOrderDataType, Id } from "@/types";


export const getAllOrders = createAsyncThunk<void, Id>("orders/all", async (id, thunkAPI) => {
  try {
    const response = await api.get(`hospital/orders?hospital=${id}`);
    return response.data.data;
  } catch (error: any) {
    if (error.response) return thunkAPI.rejectWithValue(error.message);
  }
});

export const addOrder = createAsyncThunk<void, AddOrderDataType>(
  "order/add",
  async (data, thunkAPI) => {
    try {
      const response = await api.post(`hospital/orders`, data);
      return response.data.data;
    } catch (error: any) {
      if (error.response) return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteOrder = createAsyncThunk<void, Id>("hospital/delete", async (id: Id) => {
  try {
    const response = await api.delete(`hospital/orders/${id}`);
    return response.data.data;
  } catch (error: any) {
    if (error.response) return error.response.data;
  }
});
