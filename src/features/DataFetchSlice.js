import { createSlice } from "@reduxjs/toolkit";
import { getSingleUser, getUsers, userDelete } from "./actions/dataFetch";

//action defined
const initialState = {
  users: [],
  singleEmployee: {},
  loading: false,
  error: null,
}


const userList = createSlice({
  name: "userList",
  initialState: initialState,
  reducers:{},
  extraReducers: function (builder) {
      builder.addCase(getUsers.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      });
      builder.addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      //view employee start //
      builder.addCase(getSingleUser.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(getSingleUser.fulfilled, (state, action) => {
        state.singleEmployee = action.payload;
        state.loading = false;
      });
      builder.addCase(getSingleUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      //view employee end //
      //delete func start //
      builder.addCase(userDelete.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(userDelete.fulfilled, (state, action) => {
        state.users = [...state.users,action.payload];
        state.loading = false;
      });
      builder.addCase(userDelete.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.payload;
      });
      //delete func end //
  },
});

export default userList.reducer;
