import Image from "next/image";
import React from "react";

const Commentsection = () => {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-12 d-flex">
            <Image
              src="/pics_svgs/placeholder.svg"
              alt="Image"
              className="img-fluid rounded-4 p-1"
              width={100}
              height={50}
            />
            <div className="p-2">
              <p className="Blog-filter-section-paragraph my-2">Samantha </p>
              <p className="Blog-filter-section-paragraph-2">1 Month Ago</p>
            </div>
          </div>
        </div>
        <p className="comment-section-user-comment p-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </>
  );
};

export default Commentsection;
