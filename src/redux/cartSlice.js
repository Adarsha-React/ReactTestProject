import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["Shirt", "Pant"],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    makeCartEmpty: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, makeCartEmpty } = cartSlice.actions;
export default cartSlice.reducer;
