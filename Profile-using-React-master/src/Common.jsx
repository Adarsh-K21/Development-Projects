import React from "react";
// import Web from "../src/images/img1.svg";
import { Link } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 mt-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <br /> <div className="brand-name">Adii Bhai</div>
                  </h1>
                  <h2 className="pg">
                    We are the team of talented developers making website.
                  </h2>

                  <div className="mt-3">
                    <Link to={props.btLink} className="btn btn-outline-primary">
                      {props.btname}
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgSrc}
                    className="img-fluid animated"
                    alt="home-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
