import {createSlice} from "@reduxjs/toolkit"

const dataSlice = createSlice({
    name : "data",
    initialState : {
        setData  : null,
        items : [],
  
    },
    reducers :{
        storeData : (state,action)=>{
             state.setData = action.payload
        },
        addToCart : (state,action)=>{
           state.items.push(action.payload)
        },
        removeIteam : (state,action)=> {
            state.items.pop() ;
        },
        clearCart : (state)=>{
             state.items.length=0 ;
        },
       
    }
})

export const {storeData,clearCart,removeIteam,addToCart}=dataSlice.actions

export default dataSlice.reducer