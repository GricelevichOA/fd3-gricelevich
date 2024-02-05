import { getAlbum, getAlbumPhotos, getAlbums } from "../api/jsonplaceholder";
import { actions } from "../store";

export async function getAlbumsAction(dispatch) {
  dispatch(actions.albums.isLoadingStart());
  const albums = await getAlbums();
  dispatch(actions.albums.loadAlbums(albums));
  dispatch(actions.albums.isLoadingEnd());
}

export async function getAlbumAction(dispatch, albumId) {
  dispatch(actions.albums.isLoadingStart());
  const album = await getAlbum(albumId);
  dispatch(actions.albums.loadAlbum(album));
  dispatch(actions.albums.isLoadingEnd());
}

export async function getAlbumPhotosAction(dispatch, albumId) {
  dispatch(actions.albums.isLoadingStart());
  const photos = await getAlbumPhotos(albumId);
  dispatch(actions.albums.loaAlbumPhotos(photos));
  dispatch(actions.albums.isLoadingEnd());
}
