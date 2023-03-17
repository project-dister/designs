import React from "react";
import illustration from "../assets/dister-hero-illustration.png";
import "./Hero.scss";

function Hero() {
  return (
    <main className="hero">
      {/* Two columns: one for text and one for image */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Column for text */}
        <div className="w-full md:w-1/2">
          {/* Main title */}
          <h1 className="hero-title mb-4 text-center md:text-left">
            A Fair Freelancing Platform on{" "}
            <span className="orange-text">Web3</span>
          </h1>
          {/* Subtitle */}
          <h3 className="hero-subtitle mb-4 text-center md:text-left">
            We aim to create a fair and transparent{" "}
            <span className="orange-text">freelancing platform</span> where
            everyone benefits.
          </h3>
          {/* Tutorial button (hidden on mobile) */}
          <div className="hidden md:block">
            <button className="action-button">
              <i className="fa-solid fa-play"></i>Tutorial
            </button>
          </div>
          {/* Search bar (visible on mobile) */}
          <div className="md:hidden">
            <div className="flex flex-row">
              <div className="search-box pt-8 pb-8">
                <input
                  type="text"
                  className="search"
                  placeholder="Search between offers"
                />
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
        </div>
        {/* Column for image */}
        <div className="w-full md:w-1/2 text-center">
          {/* Main image */}
          <img className="w-full h-auto" src={illustration} alt="Example" />
          {/* Tutorial button (visible on mobile) */}
          <div className="md:hidden">
            <button className="action-button">
              <i className="fa-solid fa-play"></i>Tutorial
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
