import { Link } from "react-router-dom";

export function AlbumCard({ title, thumbnail, id }) {
  return (
    <div className="albums__card card">
      <img className="card__thumbnail" src={thumbnail} alt={title} />

      <div className="card__title"><Link to={`/albums/${id}`}>{title}</Link></div>
    </div>
  );
}
