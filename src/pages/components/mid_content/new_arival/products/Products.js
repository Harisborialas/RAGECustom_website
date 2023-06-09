import React from "react";
import Image from "next/image";

const Products = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 p-2">
            <div className="card" id="card">
              <div className="new-badge">
                <img src="/pics_svgs/label.svg" alt="" width={64} height={64} />
              </div>
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
          <div className="col-lg-4 col-md-6 col-sm-12 p-2">
            <div className="card"  id="card">
              <div className="new-badge">
                <img src="/pics_svgs/label.svg" alt="" width={64} height={64} />
              </div>
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
          <div className="col-lg-4 col-md-6 col-sm-12 p-2">
            <div className="card"  id="card">
              <div className="new-badge">
                <img src="/pics_svgs/label.svg" alt="" width={64} height={64} />
              </div>
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
