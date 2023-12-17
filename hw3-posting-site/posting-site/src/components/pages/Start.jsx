import { Link } from "react-router-dom";

export function Start() {
  return (
    <>
      <h1 className="page__title">Start page</h1>
      <h2>Links to posts</h2>
      <ul className="start__links">
        <li className="start__link">
          <Link to={"/post/1"}>Post 1</Link>
        </li>
        <li className="start__link">
          <Link to={"/post/two"}>Post 2</Link>
        </li>
        <li className="start__link">
          <Link to={"/post/third"}>Post 3</Link>
        </li>
        <li className="start__link">
          <Link to={"/post/random-post"}>Post 4</Link>
        </li>
        <li className="start__link">
          <Link to={"/post/another-random-post"}>Post 5</Link>
        </li>
      </ul>
    </>
  );
}
