import React from "react";
import Products from "./products/Products";

const Newarrival = () => {
  return (
    <>
      <div className="container pt-5  Newarrival-Main-Container">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-5 text-center" id="new-arrival-heading-text">
              New Arrival
            </h1>
            <div className="d-flex justify-content-center">
            <p className="mt-4 new_arrival_paragraph_text text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt.
            </p>
              </div>
          </div>
        </div>
      
      <Products />
      </div>
    </>
  );
};

export default Newarrival;
