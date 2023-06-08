import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Link from "next/link";
import Rating from "../mid_content/topRatedProducts/Rating";

const SingleProduct = () => {
    
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-4 border">
            <img
              src="/pics_svgs/singleproduct.svg"
              alt=""
              className="imgsingleproduct"
            />
          </div>

          <div className="col-lg-6 col-12 p-4">
            <div class="col-12 d-flex justify-content-start">
              <Rating />
            </div>
            <div class="product-deatil">
              <h5 class="namesingle">
                Product Name Title Here <span>Category</span>
              </h5>
              <p class="price-container">
                <span>$99</span>
              </p>
            </div>
            <div className="shipment border-bottom">
              <p className="me-4">
                <img
                  src="/pics_svgs/Delivery.svg"
                  width={22}
                  height={22}
                  alt=""
                  className="me-1"
                />
                <span className="headingimg">Free Delivery</span>
              </p>
              <p className="me-4">
                <img
                  src="/pics_svgs/voucher.svg"
                  width={22}
                  height={22}
                  alt=""
                  className="me-1"
                />
                <span className="headingimg">Available Voucher</span>
              </p>
              <p className="me-4">
                <img
                  src="/pics_svgs/Package.svg"
                  width={22}
                  height={22}
                  alt=""
                  className="me-1"
                />
                <span className="headingimg">In Stock</span>
              </p>
            </div>
            <div class="mt-3">
              <h3 className="description">Description</h3>
              <p className="paradescription">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                officia fuga est ut aspernatur nobis vitae culpa laboriosam et
                enim quis iste doloremque deleniti a molestias voluptatum
                quidem, corrupti nam!
              </p>
            </div>
            <div class="product-info smart-form">
              <div class="row">
                <div class="col-md-12  col-sm-6 col-xs-6 d-flex justify-content-end">
                  <button href="#" class="btnaddtocard2 me-2">
                    Chat
                  </button>
                  <button href="#" class="btnaddtocard1">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;