import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllComments} from "./services";

export interface CommentsState {
  comments: any[];
  loading: boolean;
  error: string | null;
}

const initialState: CommentsState = {
  comments: [],
  loading: false,
  error: null,
};

const CommentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllComments.fulfilled, (state, action: PayloadAction<any>) => {
      state.comments = action.payload;
    });
  },
});

export default CommentsSlice.reducer;
