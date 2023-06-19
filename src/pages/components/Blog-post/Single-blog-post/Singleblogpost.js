import Image from "next/image";
import React from "react";
import Link from "next/link";
import Blogcollection from "../../mid_content/blog/BlogCollection";
import Commentsection from "../commentsection/Commentsection";
import Commentfield from "../commentsection/Commentfield";
import { FaCalendar, FaComment , FaUserShield, FaFacebookSquare, FaTwitter, FaShareAlt } from "react-icons/fa";

const Singleblogpost = () => {
  return (
    <>
      <div className="px-3">
        <h1 className="Single-Blog-Post-Heading">
          6 Best Smartphone for e-Sport Pro Player
        </h1>
        <div className="row flex-wrap Single-Blog-Post-Row">
          <div className="col-6 col-sm-4 col-xl-3 d-flex align-items-center">
            <FaCalendar color="#A7A7A7" size={24} className="mx-1" />
            
            
            <p className="Single-Blog-Post-breadcrumbs">12 June 2021</p>
          </div>

          <div className="col-6 col-sm-4 col-xl-3 d-flex align-items-center">
            {/* <i
              className="fas fa-calendar mx-2 mt-1"
              style={{ color: "#A7A7A7" }}
            ></i> */}
            <FaUserShield color="#A7A7A7" size={24} className="mx-1" />
            <p className="Single-Blog-Post-breadcrumbs">by Admin One</p>
          </div>

          <div className="col-6 col-sm-4  col-xl-3 d-flex align-items-center">
            {/* <i
              className="fas fa-calendar mx-2 mt-1"
              style={{ color: "#A7A7A7" }}
            ></i> */}
            <FaComment color="#A7A7A7" size={24} className="mx-1" />
            
            <p className="Single-Blog-Post-breadcrumbs">12 Comments</p>
          </div>
        </div>

        <div>
          <Image
            src="/pics_svgs/blogplaceholder.svg"
            alt="Your Image"
            width={1192}
            height={480}
            layout="responsive"
            className="rounded-5 my-4"
          />
        </div>
        <div>
          <p className="Single-Blog-Post-Details-Paragraph">
            To support performance in playing, a professional e-sport player
            must use the right device. To support performance in playing, a
            professional e-sport player must use the right e-sport-support
            smartphone. <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className="Single-Blog-Post-Details-Paragraph-qoutes">
            <span>
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. ”
            </span>{" "}
            <br />
            <span className="qoutes">- Sam Alabama</span>
          </p>
          <p className="Single-Blog-Post-Details-Paragraph">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
            <br /> <br />
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?
          </p>
        </div>
        <div className="single-blog-post-tags-container mb-5 px-3">
          <div className="row d-flex align-items-center ">
            <div className="col-12 col-md-6 mt-1">
              <div className="single-blog-post-tags-heading d-flex Single-Blog-Post-Tag-Section">
                <h1>Tags: </h1>
                <p className="mx-2"> Tips, Blog, Tech</p>
              </div>
            </div>
            <div className="col-12 col-md-6 mt-1">
              <div className="single-blog-post-tags-heading-share d-flex justify-content-end Single-Blog-Post-Tag-Section">
                <h1>Share: </h1>
                <div className="d-flex">
                  <Link href="https://www.facebook.com">
                    {/* <i
                      className="fab fa-facebook-square mx-2 "
                      style={{ color: "#383838", fontSize: "1.5rem" }}
                    ></i> */}
                    <FaFacebookSquare color="#383838" size={20} className="mx-2" />
                  </Link>
                  <Link href="https://www.twitter.com">
                    {/* <i
                      className="fab fa-twitter mx-2 "
                      style={{ color: "#383838", fontSize: "1.5rem" }}
                    ></i> */}
                    <FaTwitter color="#383838" size={20} className="mx-2" />
                  </Link>

                  <Link href="https://www.twitter.com">
                    {/* <i
                      className="fas fa-share mx-2 "
                      style={{ color: "#383838", fontSize: "1.5rem" }}
                    ></i> */}
                    <FaShareAlt color="#383838" size={20} className="mx-2" />
                   
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="single-blog-related-post mb-3">Related Post</h1>
          <Blogcollection />
        </div>
        <div>
          <h1 className="Single-Blog-Post-Comment-Heading my-3">Comments</h1>
          <Commentsection />
          <Commentsection />
        </div>
        <div>
        <h1 className="Single-Blog-Post-Comment-Heading my-4">Leave a Comment</h1>
            <Commentfield />
        </div>
      </div>
    </>
  );
};

export default Singleblogpost;