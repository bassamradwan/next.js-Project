import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ad } from "@/types";

interface OrderState {
  ad: Ad | null;
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  ad: null,
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setAd: (state, action: PayloadAction<Ad>) => {
      state.ad = action.payload;
    },
  },
});

// @ts-nocheck
export const { setAd } = orderSlice.actions;
export default orderSlice.reducer;
