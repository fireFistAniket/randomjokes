import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategory(state, action) {
      state.value = action.payload;
    },
    getJokeByCat() {},
  },
});

export const { getCategory } = categorySlice.actions;
export default categorySlice.reducer;
