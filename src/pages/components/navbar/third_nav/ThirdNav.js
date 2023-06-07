import Link from "next/link";
import React from "react";

const ThirdNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
              <Link className="nav-link mx-3" href="/components/About-content/About">
                About
              </Link>
              <Link className="nav-link " href="#">
                Product
              </Link>
              <Link className="nav-link mx-3" href="#">
                Blog
              </Link>
              <Link className="nav-link " href="#">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ThirdNav;
