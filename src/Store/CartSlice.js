import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddToCart(state, action) {
      const existingItem = state.find((cartItem) => cartItem.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    RemoveFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload.id); 
    },
    DecreaseQuantity(state, action) {
      const existingItem = state.find((cartItem) => cartItem.id === action.payload.id);
      if (existingItem.quantity === 1) {
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        existingItem.quantity -= 1;
      }
  },
  },
});
export const { AddToCart, RemoveFromCart,DecreaseQuantity } = CartSlice.actions;
export default CartSlice.reducer;
