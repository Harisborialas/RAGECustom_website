import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
const SecNav = () => {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-4">
            <Link className="navbar-brand" href="/">
              Tronix
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-8 mt-2 d-flex">
            <div className="sec_nav_icon_1">
              <img src="/pics_svgs/Dashboard.svg" alt="" />
            </div>
            <form className="form_searchbar" role="search">
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="searchicon">
                    <FaSearch />
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-end mt-2">
            <Link href="/components/add_to_cart/AddToCart" className="sec_nav_icons me-4">
              <img
                src="/pics_svgs/ShoppingBag.svg"
                alt=""
                width={32}
                height={32}
              />
            </Link>
            <a href="" className="sec_nav_icons me-5" target="_blank">
              <img src="/pics_svgs/email-2.svg" alt="" width={32} height={32} />
            </a>
            <a href="" className="sec_nav_btn me-4">
              <p className="signin">Sign In</p>
            </a>
            <button className="btn text-white" id="btn_signupnav">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecNav;
