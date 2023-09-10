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


const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    // filtered: [],
    // related: [],
    isLoading: false,
  },

  reducer: {
    
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default productsSlice.reducer;

