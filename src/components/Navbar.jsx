// Import required packages and files
import React from "react";
import "./Navbar.scss";
import logo from "../assets/dister-logo.png";

// Navbar functional component
export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        {/* Display the logo */}
        <img src={logo} alt="Dister Logo" className="logo" />

        {/* Search box */}
        <div className="search-box">
          <input
            type="text"
            className="search"
            placeholder="Search between offers"
          />
          {/* Search icon */}
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        {/* Connect button */}
        <button className="action">
          Connect <i className="fa-brands fa-ethereum"></i>
        </button>
      </div>
    </nav>
  );
}
