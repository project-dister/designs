import React from "react";
import "./Navbar.scss"; // Import the SCSS file
import logo from "../assets/dister-logo.png"; // Import the logo

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <img src={logo} alt="" className="logo" />

        <div className="search-box">
          <input
            type="text"
            className="search"
            placeholder="Search between offers"
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <button className="action">
          connect <i className="fa-brands fa-ethereum"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
