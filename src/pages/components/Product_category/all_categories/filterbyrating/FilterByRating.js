import React, { useState } from "react";

const FilterByRating = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  return (
    <>
      <div className="container" >
        <div className="row mt-3">
          <div className="col-12">
            <h3 className="headingfilterrating" onClick={toggleFilterVisibility}>
              Filter by Rating
            </h3>
          </div>
        </div>
        {isFilterVisible && 
        <div className="row">
            <div className="col-col-12" id="containerfilterborder">
                <p>stars</p>
            </div>
        </div>
        }
      </div>
    </>
  );
};

export default FilterByRating;
