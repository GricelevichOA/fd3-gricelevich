import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    isLoading: false,
    currentUser: null,
    currentUserAlbums: [],
  },
  reducers: {
    isLoadingStart: (state) => {
      state.isLoading = true;
    },
    isLoadingEnd: (state) => {
      state.isLoading = false;
    },
    loadUsers: (state, action) => {
      state.items = action.payload;
    },
    loadUser: (state, action) => {
      state.currentUser = action.payload;
    },
    loadUserALbums: (state, action) => {
      state.currentUserAlbums = action.payload;
    },
  },
});
