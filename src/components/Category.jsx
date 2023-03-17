import React from "react";
import "./Category.scss";
import IconList from "./IconList";

export default function Category() {
  return (
    <section className="categories">
      <h2 className="section-title">
        Shop by
        <span className="orange-text"> Categories</span>
      </h2>
      <div className="category-carousel">
        <IconList />
      </div>
    </section>
  );
}
