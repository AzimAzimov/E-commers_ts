import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";

import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";


export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    [apiSlice.re]
  },

  devTools: true,
})
