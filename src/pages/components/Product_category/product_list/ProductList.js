import React from "react";
import AddToCard from "../../mid_content/add_to_cart_button/AddToCart";
import Rating from "../../mid_content/topRatedProducts/Rating";
import Link from "next/link";

const ProductList = () => {
  return (
    <>
      <div className="row mt-4">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h1 className="productlistheading my-5">Product List</h1>
        </div>
      </div>
      <div className="row-container">
        <div className="row" id="rowtopprocuts">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card rounded-card" id="">
              <Link href="/components/Single_Product/SingleProduct">
                <img
                  src="/pics_svgs/placeholder.svg"
                  className="card-img-top top-products-img"
                  alt="..."
                />
              </Link>

              <div className="card-body text-center">
                <p className="product-text mb-0">Smart Mop Robot</p>
                <p className="product-price-text mb-3">$1000.00</p>
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
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card rounded-card" id="">
              <img
                src="/pics_svgs/placeholder.svg"
                className="card-img-top top-products-img"
                alt="..."
              />
              <div className="card-body text-center">
                <p className="product-text mb-0">Smart Mop Robot</p>
                <p className="product-price-text mb-3">$1000.00</p>
                <span>
                  <Rating />
                </span>
              </div>
              <div className="mb-4">
                <AddToCard />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card rounded-card" id="">
              <img
                src="/pics_svgs/placeholder.svg"
                className="card-img-top top-products-img"
                alt="..."
              />
              <div className="card-body text-center">
                <p className="product-text mb-0">Smart Mop Robot</p>
                <p className="product-price-text mb-3">$1000.00</p>
                <span>
                  <Rating />
                </span>
              </div>
              <div className="mb-4">
                <AddToCard />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card rounded-card" id="">
              <img
                src="/pics_svgs/placeholder.svg"
                className="card-img-top top-products-img"
                alt="..."
              />
              <div className="card-body text-center">
                <p className="product-text mb-0">Smart Mop Robot</p>
                <p className="product-price-text mb-3">$1000.00</p>
                <span>
                  <Rating />
                </span>
              </div>
              <div className="mb-4">
                <AddToCard />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card rounded-card" id="">
              <img
                src="/pics_svgs/placeholder.svg"
                className="card-img-top top-products-img"
                alt="..."
              />
              <div className="card-body text-center">
                <p className="product-text mb-0">Smart Mop Robot</p>
                <p className="product-price-text mb-3">$1000.00</p>
                <span>
                  <Rating />
                </span>
              </div>
              <div className="mb-4">
                <AddToCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
