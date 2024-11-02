import { configureStore } from "@reduxjs/toolkit";
import { userApiSlice } from "./api/userApiSlice";
import userSlice from "./features/userSlice";
import utilsSlice from "./features/utilsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    utils: utilsSlice,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // To allow non-serializable values
      immutableCheck: false,
    }).concat(userApiSlice.middleware),
});
