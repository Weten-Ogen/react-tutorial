import { configureStore } from "@reduxjs/toolkit";
import cartReducer  from './features/cart'


export const store = configureStore({
     reducer:{
        cart: cartReducer,
    },
})