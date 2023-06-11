import React, { useEffect, useState } from "react";
import AddToCard from "../add_to_cart_button/AddToCart";
import Rating from "./Rating";
import Link from "next/link";

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
            
              <div className="col-lg-3 col-md-4 col-sm-12" >
                <div className="card rounded-card" id="cardtopproductlength">
                 
                      <img
                        src={''}
                        className="card-img-top top-products-img"
                        alt="..."
                        width={313}
                        height={313}
                      />
                    

                  <div className="card-body text-center">
                    <p className="product-text mb-0">abc</p>
                    <p className="product-price-text mb-3">2344</p>
                    <span>
                      <Rating />
                    </span>
                  </div>
                  <div className="mb-4">
                    <Link href="/components/add_to_cart/AddToCart">
                      <AddToCard />
                    </Link>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Topproducts;
