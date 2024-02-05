import { createSlice } from "@reduxjs/toolkit";

export const photosSlice = createSlice({
  name: "photos",
  initialState: {
    items: [],
    isLoading: false,
  },
  reducers: {
    isLoadingStart: (state) => {
      state.isLoading = true;
    },
    isLoadingEnd: (state) => {
      state.isLoading = false;
    },
    loadPhotos: (state, action) => {
      state.items = action.payload;
    },
  },
});
