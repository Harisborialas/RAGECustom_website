import React from "react";

const FeaturedProducts = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-5 text-center" id="new-arrival-heading-text">
              Featured Product
            </h1>
            <p className="mt-4 new_arrival_paragraph_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br>{" "}
              sed do eiusmod tempor incididunt.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="card" id="card_feature">
              <h3 className="card-title text-center mt-2">
                Wireless Microphone
              </h3>
              <p className="card-text para text-center">
                <span className="text-line text-secondary">$29.99</span> -
                $19.99
              </p>

              <div className="card-body">
                <img
                  src="/pics_svgs/microphone.svg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="row d-flex justify-content-center mt-4 mb-3">
                  <div className="col-3 me-3 time ">
                    <h3>2</h3>
                    <p className="text-dark">Hours</p>
                  </div>
                  <div className="col-3 me-3 time ">
                    <h3>16</h3>
                    <p className="text-dark">Minutes</p>
                  </div>
                  <div className="col-3 time">
                    <h3>27</h3>
                    <p className="text-dark">Seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="card mb-3" id="smallcards">
              <div className="row g-0">
                <div className="col-md-4" id="card-col-4"></div>
                <div className="col-md-8">
                  <div className="card-body">
                    <button className="limitedoffer mt-3">Limited Offer</button>
                    <h5 className="card-title title mt-3">
                      Smart Watch New Series
                    </h5>
                    <p className="card-text para">
                      <span className="text-line text-secondary">$29.99</span> -
                      $19.99
                    </p>
                    <div className="card-text mb-2">
                      <div className="row d-flex justify-content-start ms-1">
                        <div className="col-3 me-3 time-2  mt-4">
                          <h3 className="mt-3">2</h3>
                          <p className="text-dark">Hrs</p>
                        </div>
                        <div className="col-3 me-3 time-2  mt-4">
                          <h3 className="mt-3">16</h3>
                          <p className="text-dark">Min</p>
                        </div>
                        <div className="col-3 time-2 mt-4">
                          <h3 className="mt-3">27</h3>
                          <p className="text-dark">Sec</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3" id="smallcard-2">
              <div className="row g-0">
                <div className="col-md-4" id="card-col-4v2">
                  {/* <img
                    src="/pics_svgs/microphone.svg"
                    className="img-fluid rounded-start"
                    alt="..."
                    width={376}
                    height={376}
                  /> */}
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <button className="limitedoffer mt-3">Limited Offer</button>
                    <h5 className="card-title title mt-3">
                      Smart Watch New Series
                    </h5>
                    <p className="card-text para mt-2">
                      <span className="text-line text-secondary">$29.99</span> -
                      $19.99
                    </p>
                    <div className="card-text mb-2">
                      <div className="row d-flex justify-content-start ms-1">
                        <div className="col-3 me-3 time-2  mt-4">
                          <h3 className="mt-3">2</h3>
                          <p className="text-dark">Hrs</p>
                        </div>
                        <div className="col-3 me-3 time-2  mt-4">
                          <h3 className="mt-3">16</h3>
                          <p className="text-dark">Min</p>
                        </div>
                        <div className="col-3 time-2 mt-4">
                          <h3 className="mt-3">27</h3>
                          <p className="text-dark">Sec</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
