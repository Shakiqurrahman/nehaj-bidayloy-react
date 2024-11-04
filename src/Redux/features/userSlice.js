import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        accessToken: null,
        isActiveHamburger: false,
    },
    reducers: {
        setActiveHamburger: (state, action) => {
            state.isActiveHamburger = action.payload;
        },
        setUserData: (state, action) => {
            state.user = action.payload;
        },

        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        logout: (state, action) => {
            state.user = null;
            state.accessToken = null;
        },
    },
});

export const { setActiveHamburger, setAccessToken, setUserData, logout } =
    userSlice.actions;
export default userSlice.reducer;
