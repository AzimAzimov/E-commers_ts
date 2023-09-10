import { createAsyncThunk } from "@reduxjs/toolkit"


export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, th)
)

const initialState = {
  list: [],
}

