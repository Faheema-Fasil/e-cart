import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";
import wishListSlice from "./slice/wishListSlice";
import Wishlist from "../Pages/Wishlist";

const cartStore=configureStore({
    reducer:{
        productReducer:productSlice,
        wishListReducer: wishListSlice
    }
})
export default cartStore