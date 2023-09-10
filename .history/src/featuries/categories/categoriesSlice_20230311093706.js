import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

import { BASE_URL } from "../../utils/constants";


export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const respons = await axios(`${BASE_URL}/categories`)
      return respons.data
      console.log("category", error);
    } catch (error) {
      console.log("category", error);
      return thunkAPI.fulfillWithValue(error)
    }
  }
)

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
    isLoading: false,
  },
  extraRedusers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    })

    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    })

     builder.addCase(getCategories.rejected, (state) => {
      state.isLoading = false;
    })
  }
})

export default categoriesSlice.reducer;

