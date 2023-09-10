import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

import { BASE_URL } from "../../utils/constants";


// export const getCategories = createAsyncThunk(
//   "categories/getCategories",
//   async (_, thunkAPI) => {
//     try {
//       const respons = await axios(`${BASE_URL}/categories`)
//       return respons.data
//     } catch (error) {
//       console.log("category", error);
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// )


const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: [],
    cart: [],
    isLoading: false,
  },

  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === payload)
    }
  }

  extraReducers: (builder) => {
    // builder.addCase(getCategories.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(getCategories.fulfilled, (state, { payload }) => {
    //   state.list = payload;
    //   state.isLoading = false;
    // });
    // builder.addCase(getCategories.rejected, (state) => {
    //   state.isLoading = false;
    // });
  },
});

export default userSlice.reducer;

