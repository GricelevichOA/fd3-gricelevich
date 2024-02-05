import { getUsers, getUser, getUserAlbums } from "../api/jsonplaceholder";
import { actions } from "../store";

export async function getUsersAction(dispatch) {
  dispatch(actions.users.isLoadingStart());
  const users = await getUsers();
  dispatch(actions.users.loadUsers(users));
  dispatch(actions.users.isLoadingEnd());
}

export async function getUserAction(dispatch, userId) {
  dispatch(actions.users.isLoadingStart());
  const user = await getUser(userId);
  dispatch(actions.users.loadUser(user));
  dispatch(actions.users.isLoadingEnd());
}

export async function getUserAlbumsAction(dispatch, userId) {
  dispatch(actions.users.isLoadingStart());
  const albums = await getUserAlbums(userId);
  dispatch(actions.users.loadUserALbums(albums));
  dispatch(actions.users.isLoadingEnd());
}
