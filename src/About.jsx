import React from "react";
import Web from "../src/images/about.jpg";
import c1 from "../src/images/c1.jpg";
import c2 from "../src/images/c2.jpg";
import c3 from "../src/images/c3.jpg";
import "../src/about.css"
// import {Link} from "react-router-dom";
import Common from "./Common";

const About = () => {

    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner c--size">
                    <div className="carousel-item active">
                        <img src={c1} className="d-block w-100" alt="Image" />
                    </div>
                    <div className="carousel-item">
                        <img src={c2} className="d-block w-100" alt="Image" />
                    </div>
                    <div className="carousel-item">
                        <img src={c3} className="d-block w-100" alt="Image" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <Common name="Welcome to About Page" btname="Contact Us" btLink="/contact" imgSrc={Web} />
        </>
    );
};

export default About;