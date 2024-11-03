import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { authorApiSlice } from "./api/authorApiSlice";
import { userApiSlice } from "./api/userApiSlice";
import userSlice from "./features/userSlice";
import utilsSlice from "./features/utilsSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        utils: utilsSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
        [userApiSlice.reducerPath]: userApiSlice.reducer,
        [authorApiSlice.reducerPath]: authorApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // To allow non-serializable values
            immutableCheck: false,
        }).concat(
            userApiSlice.middleware,
            apiSlice.middleware,
            authorApiSlice.middleware
        ),
});
