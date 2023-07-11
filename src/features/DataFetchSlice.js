import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./actions/dataFetch";

//action defined
const initialState = {
  users: [],
  loading: false,
  error: null,
}


const userList = createSlice({
  name: "userList",
  initialState: initialState,
  reducers:{},
  extraReducers: function (builder) {
    builder
      .addCase(getUsers.pending, (state) => {
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
  },
});

export default userList.reducer;
