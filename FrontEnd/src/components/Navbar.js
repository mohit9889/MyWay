/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/Navbar.css";

import LOGO from "../assets/MyWays-Logo/MyWays Logo.png";
import INSTANTLOGO from "../assets/Instant-logo/Instant logo.png";

const Navbar = (props) => {
  const { openModalsState, setopenModalsState } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="#">
          <img src={LOGO} width="50" height="50" alt="" loading="lazy" />
        </a>
      </div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              For You
            </a>
            <div
              className="dropdown-menu tooltip"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="#">
                Find matching interships
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Hire right talent
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Work from Home
              </a>
            </div>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <img src={INSTANTLOGO} alt="" />
              Instant Apply
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              About Us
            </a>
          </li>
        </ul>
      </div>

      <div className="form-inline my-2 my-lg-0">
        <button className="singup-btn" onClick={() => setopenModalsState(true)}>
          SIGN UP
        </button>
        <button
          className="login-btn"
          data-toggle="modal"
          data-target="#LoginModal"
        >
          LOGIN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
