import React from "react";
import Products from "../products/Products";


const Newarrival = () => {
  return (
    <>
      <div className="container">
        <div className="container text-center">
          <h1 className="mt-5" id="new-arrival-heading-text">New Arrival</h1>
          <p className="mt-4 new_arrival_paragraph_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt. 
          </p>
          <Products/>
        <h2>hello</h2>
        </div>
      </div>
    </>
  );
};

export default Newarrival;