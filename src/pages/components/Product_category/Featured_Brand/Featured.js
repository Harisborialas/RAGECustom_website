import React from "react";
import Client from "../../mid_content/brands/Clients";

const Featured = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-12 mt-3">
          <h3 className="headingFeaturedbrand">Featured Brand</h3>
          <div className="row justify-content-center pt-4">
            <div className="col-6 col-md-2 text-center">
              <img
                src="/pics_svgs/client1.svg"
                alt="Client 1"
                className="img-fluid  client-img"
              />
            </div>
            <div className="col-6 col-md-2 text-center">
              <img
                src="/pics_svgs/client2.svg"
                alt="Client 2"
                className="img-fluid  client-img"
              />
            </div>
            <div className="col-6 col-md-2 text-center">
              <img
                src="/pics_svgs/client3.svg"
                alt="Client 3"
                className="img-fluid  client-img"
              />
            </div>
            <div className="col-6 col-md-2 text-center">
              <img
                src="/pics_svgs/client4.svg"
                alt="Client 4"
                className="img-fluid  client-img"
              />
            </div>
            <div className="col-6 col-md-2 text-center">
              <img
                src="/pics_svgs/client5.svg"
                alt="Client 5"
                className="img-fluid  client-img"
              />
            </div>
            <div className="col-6 col-md-2 text-center">
              <img
                src="/pics_svgs/client6.svg"
                alt="Client 6"
                className="img-fluid  client-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
