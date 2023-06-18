import React from "react";

const FirstNav = () => {
  return (
    <>
      <div className="container-fluid pt-4 p-0" id="uppernav">
        <div className="row d-flex">
          <div className="col-lg-6 col-md-4 col-12 d-flex FirstNav-Col-Frist">
            <a href="" target="_blank" className="first_nav_icons me-3">
              <img src="/pics_svgs/instagram.svg" alt="" />
            </a>
            <a href="" target="_blank" className="first_nav_icons me-3">
              <img src="/pics_svgs/facebook.svg" alt="" />
            </a>
            <a href="" target="_blank" className="first_nav_icons me-3">
              <img src="/pics_svgs/twitter.svg" alt="" />
            </a>
            <a href="" target="_blank" className="first_nav_icons ">
              <img src="/pics_svgs/linkedin.svg" alt="" />
            </a>
          </div>
          <div className="col-lg-6 col-md-8 col-12 d-flex justify-content-end FirstNav-Col-Sec">
            <p className="d-flex me-5">
              <img src="/pics_svgs/Call.svg" alt="" className="mb-3 FirstNav-Col-Sec-Image" />
              <span className="first_nav">+92 315 9454343</span>
            </p>
            <p className="d-flex">
              <img src="/pics_svgs/Email.svg" alt="" className="mb-3 FirstNav-Col-Sec-Image" />
              <span className="first_nav">abd@abd.com</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstNav;
