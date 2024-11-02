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
  },
});

export const { setActiveHamburger, setAccessToken, setUserData } =
  userSlice.actions;
export default userSlice.reducer;
