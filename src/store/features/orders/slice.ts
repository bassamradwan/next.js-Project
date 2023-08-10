import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllOffers } from "@/store/features/offers/services";
import { getAllOrders } from "./services";

export interface OrderState {
  orders: any[];
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  orders: [],
  loading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllOrders.fulfilled, (state, action: PayloadAction<any>) => {
      state.orders = action.payload;
    });
  },
});

export default ordersSlice.reducer;
