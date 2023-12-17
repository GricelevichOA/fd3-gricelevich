import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="header">
      <nav className="header__links">
        <Link className="header__link" to={"/"}>
          Main page
        </Link>
        <Link className="header__link" to={"/terms"}>
          Terms
        </Link>
        <Link className="header__link" to={"/about"}>
          About
        </Link>
      </nav>
    </div>
  );
}
