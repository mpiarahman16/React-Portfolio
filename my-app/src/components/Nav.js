import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        Home
      </Link>

      <Link className="navbar-brand" to="/portfolio">
        Portfolio
      </Link>

    <a className="navbar-brand" href= "mailto:mpiarahman@gmail.com?cc=m.piarahman@yahoo.com " role="button">Contact</a>
    </nav>
    
  );
}

export default Nav;
