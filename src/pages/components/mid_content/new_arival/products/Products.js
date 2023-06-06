import React from "react";
import Image from "next/image";

const Products = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card" id="card">
              <img
                src="/pics_svgs/placeholder.svg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <p className="card-text">Smartphone 5G</p>
                <p className="card-price">$299</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img
                src="/pics_svgs/placeholder.svg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <p className="card-text">Smartphone 5G</p>
                <p className="card-price">$299</p>
              </div>
            </div>
          </div>{" "}
          <div className="col-4">
            <div className="card">
              <img
                src="/pics_svgs/placeholder.svg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <p className="card-text">Smartphone 5G</p>
                <p className="card-price">$299</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
