import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getUsers = createAsyncThunk("userList", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log('response-->',response);
    if(response.status === 200){
    return response.data;
    }
  });