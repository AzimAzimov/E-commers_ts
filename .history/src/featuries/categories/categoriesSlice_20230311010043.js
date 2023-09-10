import { createAsyncThunk } from "@reduxjs/toolkit"


export const getCategories = createAsyncThunk(
  "categories/getCategories",
  asyn
)

const initialState = {
  list: [],
}

