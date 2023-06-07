import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row py-4 mt-5">
            <div className="col-12 col-lg-6">
              <h1 className="footer-heading-text">Tronix</h1>
              <p className="footer-paragraph-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.{" "}
              </p>
            </div>
            <div className="col-4 col-lg-2 text-center">2nd column content</div>
            <div className="col-4 col-lg-2 text-center">3rd column content</div>
            <div className="col-4 col-lg-2 text-center">4th column content</div>
          </div>
          <div className="row">
            <div className="col-md-6">2nd row 1st column</div>
            <div className="col-md-6">2nd row 2st column</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
