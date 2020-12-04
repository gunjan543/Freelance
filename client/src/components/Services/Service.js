import React from "react";
import "./services.css";

function Service(props){

  return(

        <div className = "col-md-4 p-4  text-center">
        <div className = "block px-3 py-5">
        <div className = "mt-3">
        {props.image}
        <p>{props.description}</p>
        </div>
        </div>
        </div>
    );


}   

export default Service;