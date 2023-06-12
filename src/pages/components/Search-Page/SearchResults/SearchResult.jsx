import React from "react";
import SortByDropdown from "../SortByDropdown/SortByDropdown";
import Image from "next/image";
import { useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

const SearchResult = () => {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  const [currentPage, setCurrentPage] = useState(1);

  // Define the total number of pages
  const totalPage = 3;

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Add your logic to fetch blog posts for the selected page
  };
  return (
    <>
      <div className="">
        <div className="row d-flex">
          <div className="col-12 col-md-6">
            <div className="Search-Result-Top-Bar">
              <p>
                Viewing{" "}
                <span className="Search-Result-Top-Bar-spantext">20</span> of
                <span className="Search-Result-Top-Bar-spantext">
                  {" "}
                  160
                </span>{" "}
                products
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-end">
            <div>
              <SortByDropdown />
            </div>
          </div>
        </div>

        <div>
          <div className="row py-3">
            <div className="col-12 col-md-4 ">
              <Image
                src="/pics_svgs/placeholder-search-results.svg"
                alt="Description of the image"
                width={376}
                height={243}
                className="Search-Result-img-fluid rounded d-flex justify-content-center"
              />
            </div>
            <div className="col-12 col-md-8 ">
              <div className="row  ">
                <div className="col-12 d-flex align-items-center">
                  <div className="Search-result-rating-col ">
                    <p>5.0</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaStar
                      color="#FFD687"
                      size={24}
                      style={{ paddingRight: "5px" }}
                    />
                    <FaStar
                      color="#FFD687"
                      size={24}
                      style={{ paddingRight: "5px" }}
                    />
                    <FaStar
                      color="#FFD687"
                      size={24}
                      style={{ paddingRight: "5px" }}
                    />
                    <FaStar
                      color="#FFD687"
                      size={24}
                      style={{ paddingRight: "5px" }}
                    />
                    <FaStar
                      color="#FFD687"
                      size={24}
                      style={{ paddingRight: "5px" }}
                    />
                  </div>
                  <div>
                    <p className="Search-Result-Product-Reviews-Text">
                      Review (12)
                    </p>
                  </div>
                  <div className="Search-Result-Product-Reviews-Text-border-left">
                    <p className="Search-Result-Product-Reviews-Text">
                    Sold 99
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h3 className="Search-Result-Product-Heading-Text">
                    USB Speaker Portable
                  </h3>
                </div>
              </div>
              <div className="row d-flex align-items-center">
                <div className="col-8 col-md-9">
                  <p className="Search-Result-Product-Description-Text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
                <div className="col-4 col-md-3 d-flex flex-column">
                  <div className="Search-Result-Product-Discount-Price d-flex justify-content-end">
                    $39.99
                  </div>
                  <div className="Search-Result-Product-Price d-flex justify-content-end">
                    $29.99
                  </div>
                </div>
              </div>
              <div className="row  d-flex align-items-center">
                <div className="col-6 col-md-8">
                  <button
                    className="btn btn-no-border Search-Result-Add-to-Cart-Button"
                    style={{ backgroundColor: "#F46B5B", color: "white" }}
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="col-6 col-md-4 d-flex align-items-center justify-content-end">
                  <div className="px-1 ">
                    <span onClick={handleClick}>
                      {isFilled ? <FaHeart color="red" /> : <FaRegHeart />}
                    </span>
                  </div>
                  <div className="Search-Result-Wishlist-text">
                    Add to Wishlist
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="row py-3">
            <div className="col-12 col-md-4 ">
              <Image
                src="/pics_svgs/placeholder-search-results.svg"
                alt="Description of the image"
                width={376}
                height={243}
                className="Search-Result-img-fluid rounded d-flex justify-content-center"
              />
            </div>
            <div className="col-12 col-md-8 ">
              <div className="row  ">
                <div className="col-12 d-flex align-items-center">
                  <div className="Search-result-rating-col ">
                    <p>5.0</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaStar
                      color="#FFD687"
                      size={24}
                      style={{ paddingRight: "5px" }}
                    />
                    <FaStar
                      color="#FFD687"
                      size={24}
                      style={{ paddingRight: "5px" }}
                    />
                    <FaStar
                      color="#FFD687"
                      size={24}
                      style={{ paddingRight: "5px" }}
                    />
                    <FaStar
                      color="#FFD687"
                      size={24}
                      style={{ paddingRight: "5px" }}
                    />
                    <FaStar
                      color="#FFD687"
                      size={24}
                      style={{ paddingRight: "5px" }}
                    />
                  </div>
                  <div>
                    <p className="Search-Result-Product-Reviews-Text">
                      Review (12)
                    </p>
                  </div>
                  <div className="Search-Result-Product-Reviews-Text-border-left">
                    <p className="Search-Result-Product-Reviews-Text">
                    Sold 99
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h3 className="Search-Result-Product-Heading-Text">
                    USB Speaker Portable
                  </h3>
                </div>
              </div>
              <div className="row d-flex align-items-center">
                <div className="col-8 col-md-9">
                  <p className="Search-Result-Product-Description-Text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
                <div className="col-4 col-md-3 d-flex flex-column">
                  <div className="Search-Result-Product-Discount-Price d-flex justify-content-end">
                    $39.99
                  </div>
                  <div className="Search-Result-Product-Price d-flex justify-content-end">
                    $29.99
                  </div>
                </div>
              </div>
              <div className="row  d-flex align-items-center">
                <div className="col-6 col-md-8">
                  <button
                    className="btn btn-no-border Search-Result-Add-to-Cart-Button"
                    style={{ backgroundColor: "#F46B5B", color: "white" }}
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="col-6 col-md-4 d-flex align-items-center justify-content-end">
                  <div className="px-1 ">
                    <span onClick={handleClick}>
                      {isFilled ? <FaHeart color="red" /> : <FaRegHeart />}
                    </span>
                  </div>
                  <div className="Search-Result-Wishlist-text">
                    Add to Wishlist
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="row py-3">
            <div className="col-12 col-md-4 ">
              <Image
                src="/pics_svgs/placeholder-search-results.svg"
                alt="Description of the image"
                width={376}
                height={243}
                className="Search-Result-img-fluid rounded d-flex justify-content-center"
              />
            </div>
            <div className="col-12 col-md-8 ">
              <div className="row  ">
                <div className="col-12 d-flex align-items-center">
                  <div className="Search-result-rating-col ">
                    <p>5.0</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaStar
                      color="#FFD687"
                      size={24}
                      style={{ paddingRight: "5px" }}
                    />
                    <FaStar
                      color="#FFD687"
                      size={24}
                      style={{ paddingRight: "5px" }}
                    />
                    <FaStar
                      color="#FFD687"
                      size={24}
                      style={{ paddingRight: "5px" }}
                    />
                    <FaStar
                      color="#FFD687"
                      size={24}
                      style={{ paddingRight: "5px" }}
                    />
                    <FaStar
                      color="#FFD687"
                      size={24}
                      style={{ paddingRight: "5px" }}
                    />
                  </div>
                  <div>
                    <p className="Search-Result-Product-Reviews-Text">
                      Review (12)
                    </p>
                  </div>
                  <div className="Search-Result-Product-Reviews-Text-border-left">
                    <p className="Search-Result-Product-Reviews-Text">
                    Sold 99
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h3 className="Search-Result-Product-Heading-Text">
                    USB Speaker Portable
                  </h3>
                </div>
              </div>
              <div className="row d-flex align-items-center">
                <div className="col-8 col-md-9">
                  <p className="Search-Result-Product-Description-Text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
                <div className="col-4 col-md-3 d-flex flex-column">
                  <div className="Search-Result-Product-Discount-Price d-flex justify-content-end">
                    $39.99
                  </div>
                  <div className="Search-Result-Product-Price d-flex justify-content-end">
                    $29.99
                  </div>
                </div>
              </div>
              <div className="row  d-flex align-items-center">
                <div className="col-6 col-md-8">
                  <button
                    className="btn btn-no-border Search-Result-Add-to-Cart-Button"
                    style={{ backgroundColor: "#F46B5B", color: "white" }}
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="col-6 col-md-4 d-flex align-items-center justify-content-end">
                  <div className="px-1 ">
                    <span onClick={handleClick}>
                      {isFilled ? <FaHeart color="red" /> : <FaRegHeart />}
                    </span>
                  </div>
                  <div className="Search-Result-Wishlist-text">
                    Add to Wishlist
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="py-3">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link-arrow"
              onClick={() => handlePageChange(currentPage - 1)}>
              <img src="/pics_svgs/backarrow.svg" alt="Previous" />
            </button>
          </li>
          <li className="page-item">
            <button
              className={`page-link ${currentPage === 1 ? "active" : ""}`}
              onClick={() => handlePageChange(1)}>
              1
            </button>
          </li>
          <li className="page-item">
            <button
              className={`page-link ${currentPage === 2 ? "active" : ""}`}
              onClick={() => handlePageChange(2)}>
              2
            </button>
          </li>
          <li className="page-item">
            <button
              className={`page-link ${currentPage === 3 ? "active" : ""}`}
              onClick={() => handlePageChange(3)}>
              3
            </button>
          </li>
          {/* Add more page buttons as needed */}
          <li
            className={`page-item ${
              currentPage === totalPage ? "disabled" : ""
            }`}>
            <button
              className="page-link-arrow"
              onClick={() => handlePageChange(currentPage + 1)}>
              <img src="/pics_svgs/frontarrow.svg" alt="Next" />
            </button>
          </li>
        </ul>
      </nav>

      </div>
    </>
  );
};

export default SearchResult;
