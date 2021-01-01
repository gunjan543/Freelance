import React from 'react'
import './future.css';
import Recommend from "../images/recommend.png";
import Bid from "../images/bid.jpg";
import Online from "../images/online.jpg";
import Feedback from "../images/feedback.jpg";
import logo from '../images/logo.png';
const Future = () => {
    return ( 
        <div className="future">
           <div className="future-logo"> <img src={logo}></img></div>
           <a href="/">Home</a>
            <h1>
                Future Advancements
            </h1>
            <div className="future-divs">
                <img className="future-img" src={Recommend} alt = ""/>  
                <p>Recommend suitable employee,according to the <br></br>needs of the employer</p>
                <img className="future-img" src={Bid} alt = ""/>  
                <p>Including Bid system for employees</p>
                <img className="future-imgs" src={Online} alt = ""/>     
                <p>Including Online Transactions</p>
                <img className="future-imgs" src={Feedback} alt = ""/>  
                <p>Customising Employee preferences <br></br>based on Employer Feedback</p>
            </div>
        </div>
     );
}
 
export default Future;