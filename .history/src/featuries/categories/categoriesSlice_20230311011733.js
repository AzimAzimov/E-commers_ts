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
  },
  extraRedusers: (builder) => {
    builder.addCase(getCategories.)
  }
})

