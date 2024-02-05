import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumsAction } from "../../actions/albums";
import { AlbumCard } from "../common/AlbumCard";
import { getALbumThumbnail } from "../../utils/utils";

export function Albums() {
  const albums = useSelector((store) => store.albums);
  const photos = useSelector((store) => store.photos.items);
  const dispatch = useDispatch();

  useEffect(() => {
    getAlbumsAction(dispatch);
  }, []);
  return (
    <div>
      <h2>ALBUMS</h2>
      {albums.isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="albums">
          {albums.items.map((album, index) => (
            <AlbumCard
              key={album.id}
              id={album.id}
              title={album.title}
              thumbnail={getALbumThumbnail(photos, index + 1)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
