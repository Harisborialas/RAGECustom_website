import React from "react";
import FilterbyPrice from "./filterdbyprice/FilterbyPrice";
import FilterByRating from "./filterbyrating/FilterByRating";
import FilterByPlace from "./filterbyplace/FilterByPlace";
import FilterByBrand from "./filterbybrand/FilterByBrand";
import FilterByPromotion from "./filterbypromotion/FilterByPromotion";
import FilterByPayment from "./filterbypayment/FilterByPayment";
import FilterByShipment from "./filterbyshipment/FilterByShipment";

const AllCategories = () => {
  return (
    <>
      <div className="container mt-3" id="border">
        <div className="row">
          <div className="col-12">
            <h1 className="headingallcategores mb-5">All Categories</h1>
            <div id="containerallcategory">
              <p className="paraallcategory">Computer & Laptop</p>
              <p className="paraallcategory">Mobile & Tablet</p>
              <p className="paraallcategory">Camera</p>
              <p className="paraallcategory">TV & Smart Box</p>
              <p className="paraallcategory">Home Applience</p>
              <p className="paraallcategory">Smart Watch</p>
              <p className="paraallcategory">MicroPhone & Audio</p>
              <p className="paraallcategory">Gaming</p>
              <p className="paraallcategory">Printer</p>
              <p className="paraallcategory">Accessories</p>
              <p className="paraallcategory">More Categories</p>
              <p className="paraallcategory">other categories</p>
            </div>
          </div>
        </div>
      </div>
      <FilterbyPrice/>
      <FilterByPlace/>
      <FilterByRating/>
      <FilterByBrand/>
      <FilterByPromotion/>
      <FilterByPayment/>
      <FilterByShipment/>
    </>
  );
};

export default AllCategories;
