import { configureStore } from "@reduxjs/toolkit";
import { userApiSlice } from "./api/userApiSlice";
import userSlice from "./features/userSlice";
import utilsSlice from "./features/utilsSlice";
import { apiSlice } from "./api/apiSlice"

export const store = configureStore({
    reducer: {
        user: userSlice,
        utils: utilsSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
        [userApiSlice.reducerPath]: userApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // To allow non-serializable values
            immutableCheck: false,
        }).concat(userApiSlice.middleware, apiSlice.middleware),
});
