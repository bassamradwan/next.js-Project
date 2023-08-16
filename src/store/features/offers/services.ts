import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/axios";
import { Id } from "@/types";

export interface OfferQuery {
  id: Id;
  limit: number;
  technicalId?: Id;
}

export const getAllOffers = createAsyncThunk<void, OfferQuery>(
  "offers/all",
  async (data, thunkAPI) => {
    try {
      // @ts-ignore
      const { id, limit, technicalId } = data;
      const query = `${technicalId ? `&technical=${technicalId}` : `byOrderId=${id}`}`;
      const response = await api.get(
        `technical/offers?${query}`,
      );
      return response.data.data;
    } catch (error: any) {
      if (error.response) return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateOffer = createAsyncThunk<void, any>("offers/update", async (data, thunkAPI) => {
  try {
    const { id, formData } = data;
    const response = await api.put(`technical/offers/${id}`, formData);
    return response.data.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.message || "Something went wrong");
  }
});
