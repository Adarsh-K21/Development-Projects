import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

// import PropTypes from "prop-types";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-12 col-md-10 mx-auto">
            <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
                <Link className="navbar-brand namea" to="/">
                  Adarsh.io
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon">

                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><path fillRule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z" /></svg>
                  </span>
                </button>

                <Form className="d-flex ">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 width"
                    aria-label="Search"
                  />
                  <Button variant="outline-success" className="search-bar">
                    Search
                  </Button>
                </Form>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item sasur">
                      <Link
                        className="nav-link active"
                        activeClassName="class_active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item sasur">
                      <Link
                        className="nav-link active"
                        activeClassName="class_active"
                        aria-current="page"
                        to="/about"
                      >
                        About
                      </Link>
                    </li>
                    <li className="nav-item sasur">
                      <Link
                        className="nav-link active"
                        activeClassName="class_active"
                        aria-current="page"
                        to="/service"
                      >
                        Service
                      </Link>
                    </li>
                    <li className="nav-item sasur">
                      <Link
                        className="nav-link active"
                        activeClassName="class_active"
                        aria-current="page"
                        to="/contact"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
