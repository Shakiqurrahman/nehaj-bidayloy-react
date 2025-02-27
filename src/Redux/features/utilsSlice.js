import { createSlice } from "@reduxjs/toolkit";

const utilsSlice = createSlice({
  name: "utils",
  initialState: {
    activeHamburger: false,
    openSearch: false,
  },
  reducers: {
    setActiveHamburgerD: (state, action) => {
      state.activeHamburger = action.payload;
    },
    setOpenSearch: (state, action) => {
      state.openSearch = action.payload;
    },
  },
});

export const { setActiveHamburgerD, setOpenSearch } = utilsSlice.actions;
export default utilsSlice.reducer;
