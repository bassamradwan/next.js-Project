import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProfileInfo } from "./services";
import { Profile, User } from "@/types";

export interface UserState {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  profile: null,
  loading: false,
  error: null,
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
  },
});

// @ts-nocheck
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
