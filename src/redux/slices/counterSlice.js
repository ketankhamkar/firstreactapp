import { createSlice } from "@reduxjs/toolkit";

const data = [
  { id: 1, name: "ketan khamkar", city: "jsp" },
  { id: 2, name: "amit khamkar", city: "lks" },
  { id: 3, name: "ratan khamkar", city: "kol" },
  { id: 4, name: "karan khamkar", city: "nom" },
  { id: 5, name: "sumit khamkar", city: "ato" },
  { id: 6, name: "shubham khamkar", city: "vom" },
];

// Create a slice for counter state
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => (state === 0 ? 0 : state - 1),
  },
});

const myDataSlice = createSlice({
  name: "myData", // Slice name
  initialState: data, // Initial state (empty array)
  reducers: {
    // Action to add an item to the array
    addItem: (state, action) => {
      return [...state, ...action.payload];
    },
    // Action to reset the array
    resetArray: () => {
      return []; // Resets the array to an empty array
    },
  },
});

// Export actions
export const { increment, decrement } = counterSlice.actions;
export const { addItem, resetArray } = myDataSlice.actions;

// Export the reducer (corrected to export the reducer, not the slice itself)
export const counterReducer = counterSlice.reducer; // Export counter reducer
export const myDataReducer = myDataSlice.reducer; // Export myData reducer
