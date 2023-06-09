import React from "react";

const Contactusformfields = () => {
  return (
    <>
      <div class="contactus-form-fields-container">
        <div className="row w-100">
          <form className="form-inline">
            <div className="form-group">
              <div className="col-12">
                <div className="form-group">
                  <label className="input-field-lable-contactus" htmlFor="nameInput">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="nameInput"
                    className="form-control custom-input-for-contactus"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label className="input-field-lable-contactus" htmlFor="emailInput">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="emailInput"
                    className="form-control custom-input-for-contactus"
                  />
                </div>
              </div>
              <div className="col-12">
                <label
                  className="mr-2 input-field-lable-contactus"
                  htmlFor="commentInput"
                >
                  Subject *
                </label>
                <textarea
                  className="form-control custom-textarea-contactus"
                  id="commentInput"
                  required
                ></textarea>
              </div>
            </div>
          </form>
          <div className="row py-3 d-flex align-items-center">
            <div className="col-12 col-md-6">
            <div className="form-check form-check-inline">
      <input className="form-check-input checkbox-lg" type="checkbox" id="termsCheckbox" />
      <label className="form-check-label" htmlFor="termsCheckbox">
        Accept Terms & Conditions
      </label>
    </div>
                </div>
                <div className="col-6 col-md-6 d-flex justify-content-end">
                <button type="submit" className="btn btn-submit-contactus-form">
        Submit
      </button>
                </div>
        </div>
          

        </div>
       
      </div>
    </>
  );
};

export default Contactusformfields;
