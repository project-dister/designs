import React from "react";
import illustration from "../assets/dister-hero-illustration.png";
import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="hero-title mb-4">
            A Fair Freelancing Platform on{" "}
            <span className="orange-text">Web3</span>
          </h1>
          <h3 className="hero-subtitle mb-4">
            We aim to create a fair and transparent
            <span className="orange-text"> freelancing platform </span> where
            everyone benefits.
          </h3>
          {/* only show action button on screens larger than md */}
          <div className="hidden md:block">
            <button className="action-button">
              <i className="fa-solid fa-play"></i>Tutorial
            </button>
          </div>

          {/* only show search bar on screens smaller than md */}
          <div className="md:hidden">
            <div className="flex flex-row">
              <div className="search-box">
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
        <div className="w-full md:w-1/2 p-4">
          <img className="w-full h-auto" src={illustration} alt="Example" />
          <div className="md:hidden">
            <button className="action-button">
                <i className="fa-solid fa-play"></i>Tutorial
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
