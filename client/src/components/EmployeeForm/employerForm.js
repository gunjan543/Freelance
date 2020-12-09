import React from 'react';
import Logo from '../Logo/logo';
import './employee.css';
import axios from 'axios';

import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router ,useHistory} from 'react-router-dom';

const EmployerForm = () => {

const history=useHistory();

const handleSubmit = () => {
     history.push('/employer/employerDash');
}
    return ( 
        
        <div>
       
            <Logo />
            <div className="box3">
            <div class="title">  
            <h2>Complete your Profile</h2>
            <h3>Just one last step !  :) </h3>
            </div>  
            <div class="form">
            <form onSubmit={handleSubmit}>
                <div class="input_field"><label>Organisation Name</label><input type="text" className="input" /></div>
                <div class="input_field"><label>Name</label><input type="text" className="input" required/></div>
                <div class="input_field"><label>Date of Birth</label><input type="date" className="input"  required/></div>
                <div class="input_field"><label>Email address</label><input type="email" className="input"  required/></div>
                <div class="input_field"><label>Contact Number</label><input type="text" className="input"  required/></div>

                <div class="input_field"><label>ID Proof</label>
                <div class="custom_select">
                <select>
                <option value="">Select</option>
                <option value="Aadhar Card">Aadhar Card</option>
                <option value="Driving License">Driving License</option>
                <option value="Voter Id">Voter ID</option>
                </select>
                </div>
                </div>

                <div class="input_field"><label>ID Number</label><input type="number" className="input" required/></div>
                <div class="input_field"><label>Address</label><textarea className="textarea"></textarea></div>
                <div class="input_field"><label>Postal Code</label><input type="text" className="input"  required/></div>
                
                <div class="input_field"><input type="submit" className="btn" value="Submit"/></div>
                
            </form>
            </div>
            </div>
            </div>
       
     );
}
 
export default EmployerForm;