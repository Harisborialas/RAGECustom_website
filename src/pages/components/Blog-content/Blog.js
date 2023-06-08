import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Blogsection from "./blog-section/Blogsection";
import Filtersection from "./filter-section/Filtersection";

const Blog = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="blog-heading-col d-flex justify-content-center">
              <div className="w-50 text-center">
                <h1 className="blog-heading-text">Latest Blog</h1>
                <p className="blog-paragraph-text mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-md-3">
             <Filtersection />
          </div>
          <div className="col-12 col-md-9">
            <Blogsection />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
