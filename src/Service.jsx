import React from "react";
import { Link } from "react-router-dom";
import web from "../src/images/serviceImg.jpg";
import Card from "./Card";
import sData from "./Sdata";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>

      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
             {
                     sData.map((val,ind)=>{

                      return <Card key={ind} imgSrc={val.imgSrc} name={val.name}/>
                     })

             }

                </div>
              </div>
            </div>
          </div>
        
      
    </>
  );
};

export default Service;
