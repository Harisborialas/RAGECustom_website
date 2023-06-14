import Image from "next/image";
import React from "react";
import QuantityCounter from "../QuantityCounter/QuantityCounter";
import Link from "next/link";

const Items = () => {
  return (
    <>
      <div>
        <div className="row mb-4">
          <div className="col-1">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input checkbox-lg"
                type="checkbox"
                id="termsCheckbox"
              />
            </div>
          </div>
          <div className="col-11">
            <div className="items-select-col2">
              <p>Select All</p>
            </div>
          </div>
        </div>

        <div className="row d-flex align-items-center AddToCart-Items-Row ">
          <div className="col-1">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input checkbox-lg"
                type="checkbox"
                id="termsCheckbox"
              />
            </div>
          </div>
          <div className="col-3 px-2">
            <div>
              <Image
                src="/pics_svgs/placeholder.svg"
                alt="Description of the image"
                layout="responsive"
                width={180}
                height={180}
              />
            </div>
          </div>
          <div className="col-8 px-4 mt-2">
            <div className="row">
              <div className="col-12 px-4">
                <h1 className="items-product-name">USB Speaker Portable</h1>
              </div>
            </div>
            <div className="row py-3 px-4 d-flex align-items-center">
              <div className="col-9 px-4">
                <div className="row p-0">
                  <p className="items-product-price p-0">$100.99</p>
                </div>
                <div className="row p-0">
                 
                  <QuantityCounter />
                </div>
              </div>
              
              <div className="col-3 d-flex justify-content-end">
                <Link href="/">
                <Image src="/pics_svgs/cross.svg" alt="Description of the image" width={24} height={24} />

                
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
