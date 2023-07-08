import { createSlice } from "@reduxjs/toolkit";


const initialState = {value : 0};

export const showSlice = createSlice({
    name:'showData',
    initialState,
    reducers:{
        showData : (state,payload)=>{          // payload is optional ... As we are not usinng it in this reducer
            state.value = initialState.value;
        },
        increment:(state) =>{
            state.value = state.value +1 ;
        },
        decrement:(state) =>{
            state.value = state.value -1 ;
        },
        icrBy10: (state,actions)=>{
            state.value = state.value + actions.payload ;
        },
        dcrBy10: (state,actions)=>{
            state.value = state.value - actions.payload ;
        },
    },
})

export const {showData,increment,decrement,icrBy10,dcrBy10} = showSlice.actions;
export default showSlice.reducer;