import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAlbumAction, getAlbumPhotosAction } from "../../actions/albums";

export function Album() {
  const params = useParams();
  const albumId = params.id;

  const albums = useSelector((state) => state.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    getAlbumAction(dispatch, albumId);
    getAlbumPhotosAction(dispatch, albumId);
  }, []);

  return (
    <>
      {albums.isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="album">
          <Link to={"/albums"}>{"<==="}</Link>
          <h2 className="page_title">Album</h2>
          <h3 className="album__title">{albums.currentAlbum?.title}</h3>(
          <Link to={`/users/${albums.currentAlbum?.userId}`}>
            open author page
          </Link>
          )
          <div className="album__cover">
            {/* Используется первое фото альбома потому, что в самом апи нет обложки альбома */}
            <img
              src={albums.currentAlbumPhotos[0]?.url}
              alt={albums.currentAlbum?.title}
            />
          </div>
          <h3>Photos:</h3>
          <div className="album__photos photos">
            {albums.currentAlbumPhotos.map((photo) => (
              <div key={photo.id} className="photo__card">
                <div className="photo__img">
                  <img src={photo.url} alt={photo.id}></img>
                </div>
                <div className="photo__title">{photo.title}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
