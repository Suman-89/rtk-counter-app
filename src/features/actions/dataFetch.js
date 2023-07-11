import { createAsyncThunk } from "@reduxjs/toolkit";
import { rootApi } from "../../RootApi";


export const getUsers = createAsyncThunk("userList", async () => {
    const response = await rootApi.get(`/users`);
    console.log('response-->',response);
    if(response.status === 200){
    return response.data;
    }
  });