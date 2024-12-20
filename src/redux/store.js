import { configureStore } from "@reduxjs/toolkit";
import { counterReducer, myDataReducer } from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Use the counter reducer
    myData: myDataReducer,
  },
});
