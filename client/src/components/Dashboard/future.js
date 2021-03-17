import React from 'react'
import Recommend from "../images/recommend.png";
import Bid from "../images/bid.jpg";
import Online from "../images/online.jpg";
import Feedback from "../images/feedback.jpg";
import Logo from '../Logo/logo';
const Future = () => {
    return ( 
        <div>
        <Logo/>
        <div className="future">
         
           <a href="/">Home</a>
            <h1>
                Future Advancements
            </h1>
            <div className="future-divs">
                <img className="future-img" src={Recommend} alt = "recommend"/>  
                <p>Recommend suitable employee,according to the <br></br>needs of the employer</p>
                <img className="future-img" src={Bid} alt = "bid"/>  
                <p>Including Bid system for employees</p>
                <img className="future-imgs" src={Online} alt = "online"/>     
                <p>Including Online Transactions</p>
                <img className="future-imgs" src={Feedback} alt = "feedback"/>  
                <p>Customising Employee preferences <br></br>based on Employer Feedback</p>
            </div>
        </div>
        </div>
     );
}
 
export default Future;