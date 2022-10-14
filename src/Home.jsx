import React from "react";
import Web from "../src/images/home.jpg";
// import {Link} from "react-router-dom";
import Common from "./Common";

const Home=()=>{

    return(
        <>
       <Common name="Grow your business with" btname="Get Started" btLink="/service" imgSrc={Web}/>
        </>
    );
};

export default Home;