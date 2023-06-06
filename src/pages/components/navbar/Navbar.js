import React from "react";

import FirstNav from "./first_nav/FirstNav";
import SecNav from "./sec_nav/SecNav";
import ThirdNav from "./third_nav/ThirdNav";
const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <FirstNav />
            <SecNav />
            <ThirdNav />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
