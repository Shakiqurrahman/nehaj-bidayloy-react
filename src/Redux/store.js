import { configureStore } from "@reduxjs/toolkit";
import user from "./features/userSlice";
import utilsSlice from "./features/utilsSlice";

export const store = configureStore({
    reducer: {
        user: user,
        utils: utilsSlice,
    },
});
