import React from "react";

function Home() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="nav-link" href="./index.html">
        Home
      </a>
      <a className="nav-link" href="./portfolio.html" role="button">
        Portfolio
      </a>
      <a
        className="nav-link"
        href="mailto:mpiarahman@gmail.com?cc=m.piarahman@yahoo.com "
        role="button"
      >
        Contact
      </a>
    </nav>
  );
}
export default Home;
