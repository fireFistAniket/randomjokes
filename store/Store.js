import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";

const store = configureStore({
  reducer: {
    categrory: categoryReducer,
  },
});
export default store;
