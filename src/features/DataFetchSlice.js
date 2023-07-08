import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//action defined
export const getUsers = createAsyncThunk("user", async () => {
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
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
    user: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder)=>{
    builder
    .addCase(getUsers.pending,(state)=>{
        state.loading = true
    })
    .addCase(getUsers.fulfilled,(state,action)=>{
        state.loading = false
        state.user = action.payload 
    })
    .addCase(getUsers.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    })
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
  }
});

// export const {fetchUser} = userList.action;
export default userList.reducer ;