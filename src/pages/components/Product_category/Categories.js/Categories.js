import React from "react";

const Categories = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-12 ">
          <div className="tags_productcategory">
            <img src="/pics_svgs/Laptop.svg" alt="" width={32} height={32} />
            <p className="para_tagsproduct">Computer & Laptops</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12 ">
          <div className="tags_productcategory">
            <img
              src="/pics_svgs/Smartphone.svg"
              alt=""
              width={32}
              height={32}
            />
            <p className="para_tagsproduct">Mobile & Tablets</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12 ">
          <div className="tags_productcategory">
            <img src="/pics_svgs/Camera.svg" alt="" width={32} height={32} />
            <p className="para_tagsproduct">Camera</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12 ">
          <div className="tags_productcategory">
            <img
              src="/pics_svgs/TvAndRemote.svg"
              alt=""
              width={32}
              height={32}
            />
            <p className="para_tagsproduct">Tv & SmartBox</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12 mt-3">
          <div className="tags_productcategory">
            <img src="/pics_svgs/Headset.svg" alt="" width={32} height={32} />
            <p className="para_tagsproduct">Accessories</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-12 mt-3">
          <div className="tags_productcategory">
            <img
              src="/pics_svgs/AirConditioner.svg"
              alt=""
              width={32}
              height={32}
            />
            <p className="para_tagsproduct">Home Appliance</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12 mt-3">
          <div className="tags_productcategory">
            <img
              src="/pics_svgs/SmartWatch.svg"
              alt=""
              width={32}
              height={32}
            />
            <p className="para_tagsproduct">Smart watch</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12 mt-3">
          <div className="tags_productcategory">
            <img src="/pics_svgs/Recording.svg" alt="" width={32} height={32} />
            <p className="para_tagsproduct">Microphone & Audio</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12 mt-3">
          <div className="tags_productcategory">
            <img src="/pics_svgs/Gamepad.svg" alt="" width={32} height={32} />
            <p className="para_tagsproduct">Gaming</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12 mt-3">
          <div className="tags_productcategory">
            <img src="/pics_svgs/Printer.svg" alt="" width={32} height={32} />
            <p className="para_tagsproduct">Printer</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12 mt-3">
          <div className="tags_productcategory">
            <img src="/pics_svgs/Speaker.svg" alt="" width={32} height={32} />
            <p className="para_tagsproduct">Other</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
