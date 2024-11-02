import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        token: null,
        isActiveHamburger: false,
    },
    reducers: {
        setActiveHamburger: (state, action) => {
            state.isActiveHamburger = action.payload;
        },
    },
});

export const { setActiveHamburger } = userSlice.actions;
export default userSlice.reducer;
