import logo from "./assets/logo_graphql.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <div>Project Mgmt</div>
          </div>
        </Link>
      </div>
    </nav>
  );
}
