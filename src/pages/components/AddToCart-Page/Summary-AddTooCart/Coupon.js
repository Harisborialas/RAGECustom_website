import Image from "next/image";
import Link from "next/link";
import React from "react";

const Coupon = () => {
  return (
    <>
      <div className="Coupon-container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <Image
              src="/pics_svgs/Coupon.svg"
              alt="Description of the image"
              width={36}
              height={36}
              className="me-2"
            />
            <Link href="/">
              <p className="p-0 m-0 Coupon-container-paragraph">
                Have a coupon code? <span className="ms-2">&gt;</span>
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="Summary-container mt-4">
        <div>
          <h1>Summary</h1>
        </div>
        <div className="row mt-3 d-flex align-items-center">
          <div className="col-9">
            <p className="p-0 m-0 Summary-container-total">Total</p>
          </div>
          <div className="col-3 d-flex justify-content-end">
            <p className="p-0 m-0 Summary-container-total-price">$202.00</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 py-3">
          <Link href="/components/CheckOut-Page/Checkout">
            <button className="btn btn-billing-info-checkout  w-100">
              Checkout
            </button>
            </Link>
          </div>

          <div className="col-12 py-3">
            <Link href="/components/Product_category/ProductCategory">
              <div className="text-center btn-summary-shopping">
                <h4>Continue Shopping</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coupon;
