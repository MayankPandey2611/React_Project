import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./cartslice"
 const store = configureStore({
   reducer:{
    mycart:myReducer
   }
 })

 export default store;