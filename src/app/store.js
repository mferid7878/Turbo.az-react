import { configureStore } from "@reduxjs/toolkit";

import basketSlice from "../features/basketSlice";

const store = configureStore({
  reducer: {
    basket: basketSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  devTools: process.env.NODE_ENV !== "production",
});

export default store;
