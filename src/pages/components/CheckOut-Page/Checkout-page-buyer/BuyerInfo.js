import React from "react";

const BuyerInfo = () => {
  return (
    <>
      <div className="row Buyer-Info-Page ">
        <div className="col-12 p-0">
          <div className="BuyerInfo-Heading py-2">
        
            <h4> Buyer Info</h4>
          </div>
        </div>
      </div>

      <div className="row py-4">
        <div className="col-12 col-md-6 py-1 px-0 pe-2">
          <label className="input-field-lable-Buyer-Info" htmlFor="nameInput">
            First Name
          </label>
          <input
            type="text"
            id="nameInput"
            className="form-control custom-input-for-Buyer-Info"
          />
        </div>
        <div className="col-12 col-md-6 py-1 px-0 pe-2">
          <label className="input-field-lable-Buyer-Info" htmlFor="nameInput">
            Last Name
          </label>
          <input
            type="text"
            id="nameInput"
            className="form-control custom-input-for-Buyer-Info"
          />
        </div>

        <div className="col-12 col-md-6 py-1 px-0 pe-2">
          <label className="input-field-lable-Buyer-Info" htmlFor="nameInput">
            Address
          </label>
          <input
            type="text"
            id="nameInput"
            className="form-control custom-input-for-Buyer-Info"
          />
        </div>

        <div className="col-12 col-md-6 py-1 px-0 pe-2">
          <label className="input-field-lable-Buyer-Info" htmlFor="nameInput">
            Contact
          </label>
          <input
            type="text"
            id="nameInput"
            className="form-control custom-input-for-Buyer-Info"
          />
        </div>

        <div className="col-12 col-md-6 py-1 px-0 pe-2">
          <label className="input-field-lable-Buyer-Info" htmlFor="nameInput">
            Country
          </label>
          <input
            type="text"
            id="nameInput"
            className="form-control custom-input-for-Buyer-Info"
          />
        </div>

        <div className="col-12 col-md-6 py-1 px-0 pe-2">
          <label className="input-field-lable-Buyer-Info" htmlFor="nameInput">
            City
          </label>
          <input
            type="text"
            id="nameInput"
            className="form-control custom-input-for-Buyer-Info"
          />
        </div>

        <div className="col-12 col-md-6 py-1 px-0 pe-2">
          <label className="input-field-lable-Buyer-Info" htmlFor="nameInput">
          State
          </label>
          <select
            id="countrySelect"
            className="form-control custom-input-for-Buyer-Info"
          >
            <option value="option1">Select State</option>
            <option value="option2">Option 1</option>
            <option value="option3">Option 2</option>
          </select>
        </div>

        <div className="col-12 col-md-6 py-1 px-0 pe-2">
          <label className="input-field-lable-Buyer-Info" htmlFor="nameInput">
            Zip Code
          </label>
          <input
            type="text"
            id="nameInput"
            className="form-control custom-input-for-Buyer-Info"
          />
        </div>

        <div className="col-12 py-0 px-0 pe-2">
          <label className="input-field-lable-Buyer-Info" htmlFor="nameInput">
            Note
          </label>
          <textarea
            type="text"
            id="nameInput"
            className="form-control custom-input-for-Buyer-Info"
          />
        </div>
      </div>
    </>
  );
};

export default BuyerInfo;
