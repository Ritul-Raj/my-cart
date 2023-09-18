import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


 export const fetchdata=createAsyncThunk('products/fetch',async function () {
        const response= await fetch('https://api.escuelajs.co/api/v1/products');
  
      return await response.json();
})
const productslice=createSlice({
name:'productslice',
initialState:{
    products:[] ,
    status:'idle',
    error:null 
}
,
// reducers:{
//     loadproducts:(action,state)=>{
//         state.products=action.payload;
//     }
// }
extraReducers: function (builder){
    builder 
    .addCase(fetchdata.pending,(state,action)=>{
        state.status='Loading';
    })     
    .addCase(fetchdata.fulfilled,(state,action)=>{
        state.products=action.payload;
        state.status='Success';
    })
    .addCase(fetchdata.rejected,(state,action)=>{
        state.status="failed";
        state.error=action.error.message;
    })
} ,
});

export default productslice.reducer;
export const {loadproducts}=productslice.actions;
