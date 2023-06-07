import React from "react";

const Blogcollection = () => {
  return (
    <>
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 col-md-4 mb-3">
            <div className="card rounded" id="card">
              <img
                src="/pics_svgs/placeholder.svg"
                className="card-img-top rounded"
                alt="..."
                style={{
                  borderBottomLeftRadius: "5px",
                  borderBottomRightRadius: "5px",
                }}
              />
              <div className="card-body">
                <p className="blog-text mb-3">
                  We Offer the Best Quality Product to Our Customers
                </p>
                <p className="blog-admin-text mb-3">
                  by <span className="admin-text-span">Admin</span>, 12 Jan 2021
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="card rounded" id="card">
              <img
                src="/pics_svgs/placeholder.svg"
                className="card-img-top rounded"
                alt="..."
                style={{
                  borderBottomLeftRadius: "5px",
                  borderBottomRightRadius: "5px",
                }}
              />
              <div className="card-body ">
                <p className="blog-text mb-3">
                  We Offer the Best Quality Product to Our Customers
                </p>
                <p className="blog-admin-text mb-3">
                  by <span className="admin-text-span">Admin</span>, 12 Jan 2021
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="col-12 col-md-4 mb-3">
            <div className="card rounded" id="card">
              <img
                src="/pics_svgs/placeholder.svg"
                className="card-img-top rounded"
                alt="..."
                style={{
                  borderBottomLeftRadius: "5px",
                  borderBottomRightRadius: "5px",
                }}
              />
              <div className="card-body ">
                <p className="blog-text mb-3">
                  We Offer the Best Quality Product to Our Customers
                </p>
                <p className="blog-admin-text mb-3">
                  by <span className="admin-text-span">Admin</span>, 12 Jan 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogcollection;