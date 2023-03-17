import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./IconList.scss";

const icons = [
  "fas fa-heart",
  "fas fa-star",
  "fas fa-clock",
  "fas fa-search",
  "fas fa-envelope",
  "fas fa-bookmark",
  "fas fa-user",
  "fas fa-shopping-cart",
  "fas fa-thumbs-up",
  "fas fa-comment",
  "fas fa-heart",
  "fas fa-star",
  "fas fa-clock",
  "fas fa-search",
  "fas fa-envelope",
  "fas fa-bookmark",
  "fas fa-user",
  "fas fa-shopping-cart",
  "fas fa-thumbs-up",
  "fas fa-comment",
];

export default function IconList() {
  const sliderRef = useRef(null);

  // Settings for the slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };

  // Handler for previous button
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  // Handler for next button
  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  // Render the component
  return (
    <div className="icon-carousel">
      <Slider ref={sliderRef} {...settings}>
        {/* Render all icons */}
        {icons.map((icon, index) => (
          <div className="icon-carousel-item" key={index}>
            <div className="icon-carousel-item-content">
              <i className={icon}></i>
              <h4 className="category-title">Blockchain</h4>
            </div>
          </div>
        ))}
        {/* Render active icon */}
        <div className="icon-carousel-item " key="whatawsdcs">
          <div className="icon-carousel-item-content active-category">
            <i className="fa-brands fa-btc "></i>
            <h4 className="category-title">Blockchain</h4>
          </div>
        </div>
      </Slider>

      {/* Render the control buttons */}
      <div className="icon-carousel-buttons">
        <button className="icon-carousel-button" onClick={handlePrev}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-carousel-button" onClick={handleNext}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
