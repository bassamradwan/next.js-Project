import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllOffers } from "@/store/features/offers/services";

export interface OfferState {
  offers: any[];
  loading: boolean;
  error: string | null;
}

const initialState: OfferState = {
  offers: [],
  loading: false,
  error: null,
};

const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllOffers.fulfilled, (state, action: PayloadAction<any>) => {
      state.offers = action.payload;
    });
  },
});

export default offersSlice.reducer;
