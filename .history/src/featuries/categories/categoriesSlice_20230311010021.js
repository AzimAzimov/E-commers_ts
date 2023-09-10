import { createAsyncThunk } from "@reduxjs/toolkit"


export const getCategories = createAsyncThunk(
  "categories/getCate"
)

const initialState = {
  list: [],
}

