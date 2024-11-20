import { createSlice } from "@reduxjs/toolkit";


const wishListSlice=createSlice({
    name:'wishlist',
    initialState:{
        wishlist:[]
    },
    reducers:{
        addToWishList:(state,action)=>{
            state.wishlist.push(action.payload)
        }
    }
})
export const {addToWishList} =wishListSlice.actions    
export default wishListSlice.reducer