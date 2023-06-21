import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="nav-header">
        <NavLink to="/" activeClassName="active">
          FeedBack
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </div>
      <div className="container">
        <h1>FeedBack</h1>
      </div>
      <div className="container">
        <h1></h1>
      </div>
    </header>
  );
}

export default Header;
