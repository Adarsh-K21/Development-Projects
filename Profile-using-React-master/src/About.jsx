import React from "react";
import Web from "../src/images/about.jpg";
// import {Link} from "react-router-dom";
import Common from "./Common";

const About=()=>{

    return(
        <>
       <Common name="Welcome to About Page" btname="Contact Us" btLink="/contact" imgSrc={Web}/>
        </>
    );
};

export default About;