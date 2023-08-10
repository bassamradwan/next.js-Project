import { Category } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllCategories } from "@/store/features/categories/services";

interface CategoriesState {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllCategories.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllCategories.fulfilled, (state, action: PayloadAction<Category[]>) => {
      state.loading = false;
      state.categories = action.payload;
    });
    builder.addCase(getAllCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default categoriesSlice.reducer;
