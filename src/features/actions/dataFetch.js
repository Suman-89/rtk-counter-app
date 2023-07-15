import { createAsyncThunk } from "@reduxjs/toolkit";
import { rootApi } from "../../RootApi";


export const getUsers = createAsyncThunk("userList", async () => {
    const response = await rootApi.get(`/users`);
    console.log('response-->',response);
    if(response.status === 200){
    return response.data.reverse();
    }
  });

export const getSingleUser = createAsyncThunk("userDetail",async (userId)=>{
  // console.log('userId_action :',userId);
  const userData = await rootApi.get(`/users/${userId}`);
  // console.log('userData-action:',userData);
  if(userData.status === 200){
  return userData.data;
  }
})

export const createUserAction = createAsyncThunk("user/create",async (newUserData)=>{
  console.log('newUserData_in_action-->',newUserData);
  const addedNewUser = await rootApi.post(`/users/`,newUserData);
  console.log('newUser-->',addedNewUser);
  if(addedNewUser.status===201){
  return addedNewUser.data;
  }
})

export const userDelete = createAsyncThunk("userDelete",async (delId)=>{
  console.log('delId_action-->',delId);
  const delUser = await rootApi.delete(`/users/${delId}`);
  console.log('delUser-->',delUser);
  return delUser.data ;
})