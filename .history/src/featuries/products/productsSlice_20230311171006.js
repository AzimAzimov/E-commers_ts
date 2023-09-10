import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

import { BASE_URL } from "../../utils/constants";


export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const respons = await axios(`${BASE_URL}/products`)
      return respons.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)


const categoriesSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    filtered
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

