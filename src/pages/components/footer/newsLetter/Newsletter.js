import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="container mt-5 p-3">
        <div
          className="newsletter-section mb-4"
          style={{
            backgroundImage: 'url("/pics_svgs/placeholder.svg")',
            borderRadius: "10px",
          }}
        >
          <div className="row">
            <div className="col-12 col-md-8 News-Letter-col1">
              <h2 className="newsletter-text mt-4 mb-2">
                Join our newsletter now!
              </h2>
              <p className="newsletter-text-paragraph mt-2 mb-5">
                Register now and get our latest updates and promos.
              </p>
              <form className="newsletter-form mt-5 mb-3">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control newsletter-input"
                    placeholder="Enter your email"
                    style={{ backgroundColor: "white" }}
                  />
                  <button
                    type="submit"
                    className="btn btn-danger newsletter-btn btn-block "
                  >
                    Join
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
