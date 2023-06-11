import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contactusdetails = () => {
  return (
    <>
      <div className="contactus-details-section-container">
        <div>
          <h1 className="contactus-details-section-heading">Contact</h1>
          <div className="row w-100">
          <div className="col d-flex">
            <Image
              src="/pics_svgs/address.svg"
              alt="Description of the image"
              width={50}
              height={25}
              className="mt-2"
            />
            <div className="col d-flex">
            <p className="contactus-details-section-details ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            </div>
          </div>
          </div>
          <div className="row w-100">
          <div className="col d-flex">
            <Image
              src="/pics_svgs/phone-contactus.svg"
              alt="Description of the image"
              width={50}
              height={25}
              className="mt-1"
            />
            <div className="col d-flex">
            <p className="contactus-details-section-details ">
            +1234567890
            </p>
            </div>
          </div>
          </div>
          <div className="row w-100">
          <div className="col d-flex">
            <Image
              src="/pics_svgs/Mail-contactus.svg"
              alt="Description of the image"
              width={50}
              height={20}
              className="mt-2"
            />
            <div className="col d-flex">
            <p className="contactus-details-section-details ">
            lovia@support.com
            </p>
            </div>
          </div>
          </div>

          <p className="contactus-details-section-paragraph py-1 mt-3 ">Follow Us</p>
          <div className="row ">
            <div className="col d-flex">
              <Link href="https://www.instagram.com/">
            <Image
              src="/pics_svgs/insta-cu.svg"
              alt="Description of the image"
              width={50}
              height={30}
              className="mt-2 mx-2"
            />
            </Link>
            <Link href="https://www.twitter.com/">
            <Image
              src="/pics_svgs/twiter-cs.svg"
              alt="Description of the image"
              width={50}
              height={30}
              className="mt-2 mx-2"

            />
            </Link>
            <Link href="https://www.facebook.com/">
            <Image
              src="/pics_svgs/fb-cs.svg"
              alt="Description of the image"
              width={50}
              height={30}
              className="mt-2 mx-2"
            />
            </Link>
              </div>
            </div>
          
         
        </div>
      </div>
    </>
  );
};

export default Contactusdetails;
