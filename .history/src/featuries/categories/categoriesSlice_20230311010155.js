import { createAsyncThunk } from "@reduxjs/toolkit"


export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      
    } catch (error) {
      console.log("cat");
    }
  }
)

const initialState = {
  list: [],
}

