import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice ({
    name: "myCart",
    initialState: {
      itemOfCart: [],
      totalQuantity: 0,
      showCart:false
    },
    reducers: {
     addTocart (state,action) {
      const newItem = action.payload;

      //checking for an existing Item inside Cart..
      const existItem = state.itemOfCart.find((item) => item.id === newItem.id)

      if (existItem) {
        existItem.quantity ++;
        existItem.totalPrice += newItem.price;
       
      }
      else {
        state.itemOfCart.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalQuantity++;
      }
     },
     removeFromCart (state,action) {
       const id = action.payload;
       //checking for an existing Item to be remove inside the Cart..

       const alreadyExistItem = state.itemOfCart.find((item) => item.id === id);
       if (alreadyExistItem.quantity === 1) {
         state.itemOfCart = state.itemOfCart.filter((item) => item.id !== id);
         state.totalQuantity--;
       } else {
         alreadyExistItem.quantity--;
         alreadyExistItem.totalPrice -= alreadyExistItem.price;
       }
     },
     setShowCart (state) {
      state.showCart = !state.showCart;   
  }
},
     
  })
  export const cartActions = cartSlice.actions

export default cartSlice;