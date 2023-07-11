import { configureStore } from "@reduxjs/toolkit";
import  showData  from "../features/ShowSlice"; //showData should not be in curly braces
import  userList  from "../features/DataFetchSlice";

export const store = configureStore({
    reducer:{
        show : showData, 
        users : userList,
    },
});
//data is accessed from show 
//reducer is the only thing that changes the value of the store. 