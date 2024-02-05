import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { albumsSlice } from "./albums";
import { usersSlice } from "./users";
import { photosSlice } from "./photos";

export const store = configureStore({
  reducer: combineReducers({
    albums: albumsSlice.reducer,
    users: usersSlice.reducer,
    photos: photosSlice.reducer,
  }),
});

export const actions = {
  albums: albumsSlice.actions,
  users: usersSlice.actions,
  photos: photosSlice.actions,
};
