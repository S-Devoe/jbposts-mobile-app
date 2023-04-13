import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { setUser } = detailsSlice.actions;

export const selectUser = (state) => state.details?.user;

export default detailsSlice.reducer;
