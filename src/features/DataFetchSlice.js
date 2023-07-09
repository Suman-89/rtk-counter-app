import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//action defined
export const getUsers = createAsyncThunk("userList", async () => {
  await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((result) => {
      console.log("result-->", result);
      return result;
    })
    .catch((err) => {
      console.log("err-->", err);
    });
});

export const userList = createSlice({
  name: "userList",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, actions) => {
        state.users = actions.payload;
        state.loading = false;
      })
      .addCase(getUsers.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      });
    // [getUsers.pending]: (state)=>{
    //     state.loading = true
    // },
    // [getUsers.fulfilled]: (state,action)=>{
    //     state.loading = false
    //     state.users = action.payload
    // },
    // [getUsers.rejected]: (state,action)=>{
    //     state.loading = false;
    //     state.error = action.payload;
    // }
  },
});

export default userList.reducer;
