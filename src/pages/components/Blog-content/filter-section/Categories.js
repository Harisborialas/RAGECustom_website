import React from "react";

const Categories = () => {
  return (
    <>
      <div className="categories-container mb-3">
        <div className="mx-3">
            <h1 className="categories-heading">Categories</h1>
            <ul className="category-menu">
    <li className="category-menu-item">
      <span className="category-icon">&#62;</span>
      Technology
    </li>
    <li className="category-menu-item">
      <span className="category-icon">&#62;</span>
      Blog
    </li>
    <li className="category-menu-item">
      <span className="category-icon">&#62;</span>
      Gadget
    </li>
    <li className="category-menu-item">
      <span className="category-icon">&#62;</span>
      Gaming
    </li>
    <li className="category-menu-item">
      <span className="category-icon">&#62;</span>
      Reviews
    </li>
    <li className="category-menu-item">
      <span className="category-icon">&#62;</span>
      News
    </li>
  </ul>
        </div>

        
      </div>
    </>
  );
};

export default Categories;
