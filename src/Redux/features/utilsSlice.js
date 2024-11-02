import { createSlice } from "@reduxjs/toolkit";

const utilsSlice = createSlice({
    name: "utils",
    initialState: {
        activeHamburger: false,
    },
    reducers: {
        setActiveHamburgerD: (state, action) => {
            state.activeHamburger = action.payload;
        },
    },
});

export const { setActiveHamburgerD } = utilsSlice.actions;
export default utilsSlice.reducer;
