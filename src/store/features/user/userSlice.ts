import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProfileInfo, fetchUserOffers } from "./services";
import { Offer, Profile, User, UserOffer } from "@/types";

export interface UserState {
  user: User | null;
  profile: Profile | null;
  offers: UserOffer[] | [];
  loading: boolean;
  error: string | null;
  offerLoading: boolean;
  offerError: string | null;
}

const initialState: UserState = {
  user: null,
  profile: null,
  offers: [],
  loading: false,
  error: null,
  offerLoading: false,
  offerError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: state => {
      state.user = null;
      state.profile = null;
    },
  },

  extraReducers: builder => {
    builder.addCase(getProfileInfo.pending, state => {
      state.loading = true;
    });

    builder.addCase(getProfileInfo.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.profile = action.payload;
      state.user = action.payload as User;
      state.loading = false;
    });

    builder.addCase(getProfileInfo.rejected, (state, action: PayloadAction<any>) => {
      state.error = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchUserOffers.pending, state => {
      state.offerLoading = true;
    });

    builder.addCase(fetchUserOffers.fulfilled, (state, action: PayloadAction<UserOffer[]>) => {
      state.offers = action.payload;
      state.offerLoading = false;
    });

    builder.addCase(fetchUserOffers.rejected, (state, action: PayloadAction<any>) => {
      state.offerError = action.payload;
      state.offerLoading = false;
    });
  },
});

// @ts-nocheck
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
