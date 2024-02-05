import { getPhotos } from "../api/jsonplaceholder";
import { actions } from "../store";

export async function getPhotosAction(dispatch) {
  dispatch(actions.photos.isLoadingStart());
  const photos = await getPhotos();
  dispatch(actions.photos.loadPhotos(photos));
  dispatch(actions.photos.isLoadingEnd());
}
