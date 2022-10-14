import React from "react";
import { Link } from "react-router-dom";
import web from "../src/images/serviceImg.jpg";

const Card = (props) => {
  return (
    <>
      
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={props.imgSrc} className="card-img-top jaiho" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link to="#" className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
            
         
    </>
  );
};

export default Card;
