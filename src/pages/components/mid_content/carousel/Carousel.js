import React from "react";

const Carousel = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 Carosel-Main-Container-Col">
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-caption">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 Carousel-Main-Col1">
                          <h5 id="first_slide_label">
                            Better Devices for Better Life
                          </h5>
                          <p className="para_carousel">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                          <button className="shopnow">Shop Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-caption">
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <h5 id="first_slide_label">
                            Better Devices for Better Life
                          </h5>
                          <p className="para_carousel">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                          <button className="shopnow">Shop Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-caption">
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <h5 id="first_slide_label">
                            Better Devices for Better Life
                          </h5>
                          <p className="para_carousel">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                          <button className="shopnow">Shop Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <img src="/pics_svgs/arrow-left.svg" alt="" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <img src="/pics_svgs/arrow-right.svg" alt="" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
