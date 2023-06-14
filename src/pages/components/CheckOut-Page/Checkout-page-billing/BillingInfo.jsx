import Link from "next/link";
import React from "react";
import { useState } from "react";

const BillingInfo = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };
  return (
    <>
      <div className="CheckOut-BillingInfo-container">
        <div className="row w-100">
          <div className="col-2 w-100">
            <div className="text-center checkout-billinginfo-heading">
              <h1>Your Order Summary</h1>
            </div>
          </div>
        </div>
        <div className="py-3 checkout-billing-order-details">
          <div className="row py-1">
            <div className="col-2">
              <p className="checkout-billing-order-details-qty">1x</p>
            </div>
            <div className="col-7">
              <p className="checkout-billing-order-details-name">
                USB Speaker Portable
              </p>
            </div>
            <div className="col-3 d-flex justify-content-end">
              <p className="checkout-billing-order-details-price">$100.00</p>
            </div>
          </div>
          <div className="row py-1">
            <div className="col-2">
              <p className="checkout-billing-order-details-qty">1x</p>
            </div>
            <div className="col-7">
              <p className="checkout-billing-order-details-name">
                Joystick Pro
              </p>
            </div>
            <div className="col-3 d-flex justify-content-end">
              <p className="checkout-billing-order-details-price">$100.00</p>
            </div>
          </div>
          <div className="row py-1">
            <div className="col-2">
              <p className="checkout-billing-order-details-qty">1x</p>
            </div>
            <div className="col-7">
              <p className="checkout-billing-order-details-name">
                Smartphone 5G
              </p>
            </div>
            <div className="col-3 d-flex justify-content-end">
              <p className="checkout-billing-order-details-price">$100.00</p>
            </div>
          </div>
        </div>

        <div className="py-3 checkout-billing-order-details">
          <div className="row py-1">
            <div className="col-6">
              <p className="checkout-billing-order-details-qty">Subtotal</p>
            </div>

            <div className="col-6 d-flex justify-content-end">
              <p className="checkout-billing-order-details-price">$100.00</p>
            </div>
          </div>
          <div className="row py-1">
            <div className="col-6">
              <p className="checkout-billing-order-details-qty">Shipping</p>
            </div>

            <div className="col-6 d-flex justify-content-end">
              <p className="checkout-billing-order-details-price">$15.00</p>
            </div>
          </div>
          <div className="row py-1">
            <div className="col-6">
              <p className="checkout-billing-order-details-qty">Tax</p>
            </div>

            <div className="col-6 d-flex justify-content-end">
              <p className="checkout-billing-order-details-price">$10.00</p>
            </div>
          </div>
        </div>

        <div className="py-3 checkout-billing-order-details">
          <div className="row py-1 mt-3">
            <div className="col-6">
              <p className="checkout-billing-order-details-total-amount">
                Total
              </p>
            </div>

            <div className="col-6 d-flex justify-content-end">
              <p className="checkout-billing-order-details-total-price">
                $325.00
              </p>
            </div>
          </div>
        </div>

        <div className="row py-4">
          <div className="col-12 checkout-billing-order-details-payment">
            <h1>Payment</h1>
          </div>
          <div className="col-12 px-0 py-3">
            <div className="button-group ">
              <button
                className={`button-billing-info ${
                  selectedButton === 1 ? "selected" : ""
                }`}
                onClick={() => handleButtonClick(1)}
              >
                Credit Card
              </button>
              <button
                className={`button-billing-info ${
                  selectedButton === 2 ? "selected" : ""
                }`}
                onClick={() => handleButtonClick(2)}
              >
                Bank Transfer
              </button>
              <button
                className={`button-billing-info ${
                  selectedButton === 3 ? "selected" : ""
                }`}
                onClick={() => handleButtonClick(3)}
              >
                Paypal
              </button>
            </div>
          </div>

          <div className="col-12 py-3">
            <button className="btn btn-billing-info-checkout  w-100">
              Checkout
            </button>
          </div>

          <div className="col-12 py-3">
            <Link href="/components/AddToCart-Page/AddToCart">
                <div className="text-center btn-billing-info-back-to-cart">
                 <h4>Back to Cart</h4>
                </div>

            </Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default BillingInfo;
