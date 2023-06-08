import React from "react";

const Tags = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h3 id="category">Category</h3>
          </div>
          <div className="col-3 ">
            <div className="tags ">
              <img src="/pics_svgs/Laptop.svg" alt="" width={32} height={32} />
              <p className="para_tags">Computer & Laptops</p>
            </div>
          </div>
          <div className="col-3 ">
            <div className="tags ">
              <img
                src="/pics_svgs/Smartphone.svg"
                alt=""
                width={32}
                height={32}
              />
              <p className="para_tags">Mobile & Tablets</p>
            </div>
          </div>
          <div className="col-3 ">
            <div className="tags ">
              <img src="/pics_svgs/Camera.svg" alt="" width={32} height={32} />
              <p className="para_tags">Camera</p>
            </div>
          </div>
          <div className="col-3 ">
            <div className="tags ">
              <img
                src="/pics_svgs/TvAndRemote.svg"
                alt=""
                width={32}
                height={32}
              />
              <p className="para_tags">Tv & SmartBox</p>
            </div>
          </div>
          <div className="col-3 mt-3">
            <div className="tags ">
              <img src="/pics_svgs/Speaker.svg" alt="" width={32} height={32} />
              <p className="para_tags">Accessories</p>
            </div>
          </div>
         
          <div className="col-3 mt-3">
            <div className="tags ">
              <img
                src="/pics_svgs/AirConditioner.svg"
                alt=""
                width={32}
                height={32}
              />
              <p className="para_tags">Home Appliance</p>
            </div>
          </div>
          <div className="col-3 mt-3">
            <div className="tags ">
              <img src="/pics_svgs/Gamepad.svg" alt="" width={32} height={32} />
              <p className="para_tags">another Categories</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tags;
