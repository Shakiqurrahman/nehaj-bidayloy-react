import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { apiSlice } from "./api/apiSlice";
import { authorApiSlice } from "./api/authorApiSlice";
import userSlice from "./features/userSlice";
import utilsSlice from "./features/utilsSlice";
// import createEncryptor from "redux-persist-transform-encrypt";

// Create an encryptor instance
// const encryptor = createEncryptor({
//     secretKey: "my-super-secret-key",
// });

// Persist configs
const userPersistConfig = {
    key: "user",
    version: 1,
    storage,
    // transforms: [encryptor],
    // whitelist: ["user"],
};

// Persisted reducers
const persistedUserReducer = persistReducer(userPersistConfig, userSlice);

const store = configureStore({
    reducer: {
        user: persistedUserReducer,
        utils: utilsSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
        [authorApiSlice.reducerPath]: authorApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // To allow non-serializable values
            immutableCheck: false,
        }).concat(apiSlice.middleware, authorApiSlice.middleware),
});

export default store;
export const persistor = persistStore(store);
