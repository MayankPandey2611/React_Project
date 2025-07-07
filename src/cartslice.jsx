import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "mycart",
  initialState: {
    cart: [],
  },
  reducers: {
    addtocart: (state, action) => {
      const existing = state.cart.find(item => item.id === action.payload.id);
      if (existing) {
        alert('Item already in cart');
      } else {
        state.cart.push(action.payload);
      }
    },
    removefromcart: (state, action) => {
      state.cart = state.cart.filter((_, i) => i !== action.payload);
    }
  },
});

export const { addtocart, removefromcart } = cartslice.actions;
export default cartslice.reducer;


  //   const scrollLeft = () => {
  //     scrollRef.current.scrollBy({
  //       left: -300,
  //       behavior: 'smooth'
  //     });
  //   };

  // const scrollRight = () => {

  //   scrollRef.current.scrollBy({
  //     left: 300,
  //     behavior: 'smooth'
  //   });

  // };


   // const addToCart = (productName) => {
  //   alert(`Added ${quantities[productName]} ${productName} to cart!`);
  // };