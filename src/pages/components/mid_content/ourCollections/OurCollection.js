import React from "react";

const OurCollection = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-5 text-center" id="new-arrival-heading-text">
              Our Collections
            </h1>
            <p className="mt-4 new_arrival_paragraph_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br>
              sed do eiusmod tempor incididunt.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-6 col-12">
            <div className="card" id="ourcollection-1">
              <div className="card-body card-collection">
                <h5 className="card-title collection-text">PC Gaming Collection</h5>
                <p className="collection-para">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="card" id="ourcollection-1">
              <div className="card-body card-collection">
                <h5 className="card-title collection-text">Camera Collection</h5>
                <p className="collection-para">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCollection;
