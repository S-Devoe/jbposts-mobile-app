import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from "./DetailsSlice.js";

const store = configureStore({
  reducer: { details: detailsReducer },
});

export default store;
