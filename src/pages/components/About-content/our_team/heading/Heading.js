import React from "react";
import OurTeam from "../OurTeam";

const Heading = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-5 text-center" id="new-arrival-heading-text">
              Our Team
            </h1>
            <div className="d-flex justify-content-center">
            <p className="mt-4 new_arrival_paragraph_text text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt.
            </p>
            </div>
          </div>
        </div>
      </div>
      <OurTeam />
    </>
  );
};

export default Heading;
