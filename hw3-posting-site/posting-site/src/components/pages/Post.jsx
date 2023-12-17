import { useParams } from "react-router-dom";

export function Post() {
  const { postId } = useParams();
  return (
    <>
      <h1 className="page__title">Post page</h1>
      <div>Post id: {postId}</div>
    </>
  );
}
