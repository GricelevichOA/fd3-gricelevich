import { createSlice } from "@reduxjs/toolkit";

export const albumsSlice = createSlice({
  name: "albums",
  initialState: {
    items: [],
    currentAlbum: null,
    currentAlbumPhotos: [],
    isLoading: false,
  },
  reducers: {
    isLoadingStart: (state) => {
      state.isLoading = true;
    },
    isLoadingEnd: (state) => {
      state.isLoading = false;
    },
    loadAlbums: (state, action) => {
      state.items = action.payload;
    },
    loadAlbum: (state, action) => {
      state.currentAlbum = action.payload;
    },
    loaAlbumPhotos: (state, action) => {
      state.currentAlbumPhotos = action.payload;
    },
  },
});
