import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    categories: 'cat'
  },
  devTools: true,
})
console.log("store", store);