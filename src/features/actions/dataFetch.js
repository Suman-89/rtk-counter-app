import { createAsyncThunk } from "@reduxjs/toolkit";
import { rootApi } from "../../RootApi";


export const getUsers = createAsyncThunk("userList", async () => {
    const response = await rootApi.get(`/users`);
    console.log('response-->',response);
    if(response.status === 200){
    return response.data;
    }
  });

export const getSingleUser = createAsyncThunk("userDetail",async(userId)=>{
  // console.log('userId_action :',userId);
  const userData = await rootApi.get(`/users/${userId}`);
  // console.log('userData-action:',userData);
  if(userData.status === 200){
  return userData.data;
  }
})

export const userDelete = createAsyncThunk("userDelete",async(delId)=>{
  console.log('delId_action-->',delId);
  const delUser = await rootApi.delete(`/users/${delId}`);
  console.log('delUser-->',delUser);
  return delUser.data ;
})