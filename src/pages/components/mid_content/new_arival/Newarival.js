import React from "react";
import Products from "./products/Products";

const Newarrival = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-5 text-center" id="new-arrival-heading-text">
              New Arrival
            </h1>
            <p className="mt-4 new_arrival_paragraph_text text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br>{" "}
              sed do eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </div>
      <Products />
    </>
  );
};

export default Newarrival;
