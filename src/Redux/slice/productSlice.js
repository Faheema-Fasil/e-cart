import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts=createAsyncThunk("products/fetchProducts",async()=>{
    const result = await axios.get("https://dummyjson.com/products")
    return result.data.products
})


const productSlice=createSlice({
    name:"products",
    initialState:{
        allproducts:[],
        loading:false,
        error:""
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.allproducts=action.payload
            state.loading=false
            state.error=""
        })
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.allproducts=[]
            state.loading=true
            state.error=""
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.allproducts=[]
            state.loading=false
            state.error="API call failed..."
        })
    }
})
export default productSlice.reducer