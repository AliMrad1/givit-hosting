import React from "react";
import { Link } from "react-router-dom";
import WhatWeDoSubNav from "./WhatWeDoSubNav";
import AppelsSubNav from "./AppelsSubNav";

function NavbarSide({appeals}) {
  return (
    <nav className="navbar fixed-top navbarSide" style={{ display: "none" }}>
      <div className="container-fluid justify-content-end">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="d-flex flex-wrap gap-1">
              <Link className="btn btn-primary rounded-pill mx-1 text-uppercase">
                what's needed
              </Link>

              <Link className="btn btn-success rounded-pill mx-1  text-uppercase">
                donate items
              </Link>

              <Link className="btn btn-info rounded-pill mx-1  text-uppercase">
                donate time
              </Link>

              <Link className="btn btn-secondary rounded-pill mx-1  text-uppercase">
                donate funds
              </Link>
            </div>
            <div className="py-2 link-hover">
              <Link
                className="nav-link active text-capitalize "
                to="/what-we-do"
              >
                <span className="text-uppercase whatWedoLink">what we do</span>
              </Link>
            </div>
            <WhatWeDoSubNav />
            <div className="py-2 link-hover">
              <Link
                className="nav-link active text-capitalize"
                to="/what-we-do"
              >
                <span className="text-uppercase">appeals</span>
              </Link>
            </div>
            <AppelsSubNav appeals={appeals}/>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3"></ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarSide;
