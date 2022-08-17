import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState = [];

export const fetchUsers = createAsyncThunk('/users/fetchUsers', async () => {
  return await axios
    .get(USERS_URL)
    .then((res) => res.data)
    .catch((err) => err.message);
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllUsers = (state) => state.usersReducer;
export const selectUserById = (state, userId) =>
  state.usersReducer.find((user) => user.id === userId);

export default usersSlice.reducer;
