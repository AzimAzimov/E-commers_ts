import { createAsyncThunk } from "@reduxjs/toolkit"


export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const respons = await ax
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
  }
})

