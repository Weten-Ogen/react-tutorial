import { configureStore } from "@reduxjs/toolkit";
import cartReducer  from './features/cart'
import modalReducer from './features/modal'


export const store = configureStore({
     reducer:{
        cart: cartReducer,
        modal: modalReducer,

    },
})