import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction, getUserAlbumsAction } from "../../actions";
import { Link, useParams } from "react-router-dom";
import { AlbumCard } from "../common/AlbumCard";
import { getALbumThumbnail } from "../../utils/utils";

export function User() {
  const params = useParams();
  const userId = params.id;

  const users = useSelector((store) => store.users);
  const photos = useSelector((store) => store.photos.items);
  const dispatch = useDispatch();

  useEffect(() => {
    getUserAction(dispatch, userId);
    getUserAlbumsAction(dispatch, userId);
  }, []);

  return (
    <div className="user">
      <Link to={"/users"}>{"<==="}</Link>
      <h2 className="user__header">User profile</h2>
      {users.isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h3 className="info__title">Info: </h3>
          <div className="user__info info">
            <div className="info__block">
              <div className="info__field">Username:</div>
              <div className="info__data">{users.currentUser?.username}</div>
            </div>
            <div className="info__block">
              <div className="info__field">Name:</div>
              <div className="info__data">{users.currentUser?.name}</div>
            </div>
            <div className="info__block">
              <div className="info__field">Email:</div>
              <div className="info__data">{users.currentUser?.email}</div>
            </div>
            <div className="info__block">
              <div className="info__field">Company:</div>
              <div className="info__data">
                {users.currentUser?.company.name}
              </div>
            </div>
          </div>
          <h3>Albums: </h3>
          <div className="user__albums albums">
            {users.currentUserAlbums.map((album, index) => (
              <AlbumCard
                key={album.id}
                id={album.id}
                title={album.title}
                thumbnail={getALbumThumbnail(photos, index + 1)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
