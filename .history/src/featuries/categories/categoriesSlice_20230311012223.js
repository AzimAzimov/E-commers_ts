import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

import { BASE_URL } from "../../utils/constants";


export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const respons = await axios(`${BASE_URL}/categories`)
      return respons.data
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
    builder.addCase(getCategories.pending, (state, action) => {
      state.isLoading: false,
    })
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.list = action.payload;
    })
  }
})

export default categoriesSlice.reducer;

