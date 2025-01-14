import { createSelector } from "reselect";
// import { RootState } from "./store"; // Adjust the path to your RootState definition

import { CartState } from "./cart.reducer";

// const selectCartReducer = (state): CartState => state.cart;
// const selectCartReducer = (state: RootState): CartState => state.cart;

const selectCartReducer = (state: { categories: CartState }): CartState =>
  state.categories;

export const selectCartItems = createSelector(
  [selectCartReducer],
  cart => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  cart => cart.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems): number =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems): number =>
    cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
);
