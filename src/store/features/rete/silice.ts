import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllRate } from "./services";

export interface OrderState {
  rates: any[];
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  rates: [],
  loading: false,
  error: null,
};

const ratesSlice = createSlice({
  name: "rates",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllRate.fulfilled, (state, action: PayloadAction<any>) => {
      state.rates = action.payload;
    });
  },
});

export default ratesSlice.reducer;
