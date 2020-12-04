import React from 'react';
import welcome from '../images/welcome.png';
import signin from '../images/signin.png';
import Logo from '../Logo/logo';
import "./main.css";

const Welcome = () => {
    return ( 
        <div>
            <Logo />
            <div id="wrapper">
            <div className="lt">
                 <h2>Welcome User</h2>
                 <input type="submit" name="Activate your Account" value="Activate your Account" />
                 <p>Or sign up again</p>
                 <input type="submit" name="Sign Up" value="Sign Up" />
            </div>
            <div className="rt">
            <img className="welcome-img" src={welcome}></img>

            </div>
            </div>
            

            </div>
     );
}
 
export default Welcome;