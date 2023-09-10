import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

import { BASE_URL } from "../../utils/constants";


export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const respons = await axios(`${BASE_URL}/categories`)
      return respons.data
    } catch (error) {
      console.log("category", error);
      return thunkAPI.rejectWithValue(error)
    }
  }
)


const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(getCategories.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default categoriesSlice.reducer;

