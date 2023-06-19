import React from "react";

const OurTeam = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 Our-Team-Cols">
          <div className="card" id="card">
            <div className="new-badge"></div>
            <img
              src="/pics_svgs/placeholder.svg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <p className="card-text headingNameteam">Sam Alabama</p>
              <p className="card-price treammember">Team Member</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 Our-Team-Cols">
          <div className="card">
            <div className="new-badge"></div>
            <img
              src="/pics_svgs/placeholder.svg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <p className="card-text headingNameteam">Athena Kamsia</p>
              <p className="card-price treammember">Team Member</p>
            </div>
          </div>
        </div>{" "}
        <div className="col-lg-3 col-md-6 col-sm-12 Our-Team-Cols">
          <div className="card">
            <div className="new-badge"></div>
            <img
              src="/pics_svgs/placeholder.svg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <p className="card-text headingNameteam">Jack Lentera</p>
              <p className="card-price treammember">Team Member</p>
            </div>
          </div>
        </div>{" "}
        <div className="col-lg-3 col-md-6 col-sm-12 Our-Team-Cols">
          <div className="card">
            <div className="new-badge"></div>
            <img
              src="/pics_svgs/placeholder.svg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <p className="card-text headingNameteam">Ahmad Pucelle</p>
              <p className="card-price treammember">Team Member</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
