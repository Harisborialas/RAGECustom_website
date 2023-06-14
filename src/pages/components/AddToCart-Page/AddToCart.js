import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Link from "next/link";
import Image from "next/image";
import Items from "./AddTooCart-Items/Items";
import Coupon from "./Summary-AddTooCart/Coupon";

const AddToCart = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row py-5">
          <div className="col-12">
            <div className="text-center Checkout-Page-Main-Heading">
              <h1>My Cart</h1>
            </div>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-5">
            <div className="text-center d-flex justify-content-end align-items-center check-out-page-numbers">
              <p>1</p>
              <Link href="/components/AddToCart-Page/AddToCart">
                <h2>Cart</h2>
              </Link>
            </div>
          </div>
          <div className="col-2 d-flex justify-content-center align-items-center">
            <div className="text-center ">
              <Image
                src="/pics_svgs/Line2.svg"
                alt="Description of the image"
                width={150}
                height={30}
              />
            </div>
          </div>
          <div className="col-5">
            <div className="text-center d-flex justify-content-start align-items-center my-cart-page-numbers number-2 ">
              <p>2</p>
              <Link href="/components/CheckOut-Page/Checkout">
                <h2>Checkout</h2>
              </Link>
            </div>
          </div>
        </div>

        <div>
            <div className="row">
                <div className="col-12 col-md-7">
                    <Items/>
                </div>
                <div className="col-12 col-md-4 py-5 ms-5">
                    <Coupon/>

                </div>
            </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AddToCart;
