import { Link } from "react-router-dom";

export function Header() {
  return <div className="header">
    <nav className="navbar">
      <Link to={"/"} className="navbar__link">PA</Link>
      <Link to={"/albums"} className="navbar__link">Albums</Link>
      <Link to={"/users"} className="navbar__link">Users</Link>
      <Link className="navbar__link">Random Photo</Link>
    </nav>
  </div>;
}
