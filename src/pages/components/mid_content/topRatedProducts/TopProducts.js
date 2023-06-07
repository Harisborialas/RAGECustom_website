import React from "react";
import AddToCard from "../add_to_cart_button/AddToCart";
import Rating from "./Rating";

const Topproducts = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h1 className="Top-rated-products-heading my-5">
              Top Rated Product
            </h1>
          </div>
        </div>
        <div className="row-container">
          <div className="row" id="rowtopprocuts">
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card rounded-card" id="">
                <img
                  src="/pics_svgs/placeholder.svg"
                  className="card-img-top top-products-img"
                  alt="..."
                />
                <div className="card-body text-center">
                  <p className="product-text mb-0">Smart Mop Robot</p>
                  <p className="product-price-text mb-3">$1000.00</p>
                  <p>
                    {/* <Rating /> */}
                  </p>
                </div>
                <div className="mb-4"><AddToCard/></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card rounded-card" id="">
                <img
                  src="/pics_svgs/placeholder.svg"
                  className="card-img-top top-products-img"
                  alt="..."
                />
                <div className="card-body text-center">
                  <p className="product-text mb-0">Smart Mop Robot</p>
                  <p className="product-price-text mb-3">$1000.00</p>
                  <p>
                    {/* <Rating /> */}
                  </p>
                </div>
                <div className="mb-4"><AddToCard/></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card rounded-card" id="">
                <img
                  src="/pics_svgs/placeholder.svg"
                  className="card-img-top top-products-img"
                  alt="..."
                />
                <div className="card-body text-center">
                  <p className="product-text mb-0">Smart Mop Robot</p>
                  <p className="product-price-text mb-3">$1000.00</p>
                  <p>
                    {/* <Rating /> */}
                  </p>
                </div>
                <div className="mb-4"><AddToCard/></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card rounded-card" id="">
                <img
                  src="/pics_svgs/placeholder.svg"
                  className="card-img-top top-products-img"
                  alt="..."
                />
                <div className="card-body text-center">
                  <p className="product-text mb-0">Smart Mop Robot</p>
                  <p className="product-price-text mb-3">$1000.00</p>
                  <p>
                    {/* <Rating /> */}
                  </p>
                </div>
                <div className="mb-4"><AddToCard/></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card rounded-card" id="">
                <img
                  src="/pics_svgs/placeholder.svg"
                  className="card-img-top top-products-img"
                  alt="..."
                />
                <div className="card-body text-center">
                  <p className="product-text mb-0">Smart Mop Robot</p>
                  <p className="product-price-text mb-3">$1000.00</p>
                  <p>
                    {/* <Rating /> */}
                  </p>
                </div>
                <div className="mb-4"><AddToCard/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topproducts;
