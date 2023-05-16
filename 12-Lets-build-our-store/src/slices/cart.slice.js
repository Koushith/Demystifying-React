import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart Slice",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, { ...action.payload, quantity: 1 }];
    },
    incrementQty: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: Number(item.quantity + 1) };
        }
        return item;
      });
    },

    decrementQty: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: Number(item.quantity - 1) }
          : item
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, clearCart, incrementQty, decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
