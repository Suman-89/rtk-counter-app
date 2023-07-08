import { configureStore } from "@reduxjs/toolkit";
import  showData  from "../features/ShowSlice"; //showData should not be in curly braces

export const store = configureStore({
    reducer:{
        show : showData, 
    }
})
//data is accessed from show 
//reducer is the only thing that changes the value of the store. 