import { createAsyncThunk } from "@reduxjs/toolkit"


export const getCategories = createAsyncThunk(
  "categories/getCategories"
)

const initialState = {
  list: [],
}

