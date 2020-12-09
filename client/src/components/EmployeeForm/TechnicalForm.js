import React from 'react';
import Logo from '../Logo/logo';
import './employee.css';
import {  isAuth } from '../../helpers/auth';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router ,useHistory} from 'react-router-dom';
import jwt from 'jsonwebtoken'


const TechnicalForm = (props) => {

    var cookie = document.cookie;
    var output = {};
    cookie.split(/\s*;\s*/).forEach(function(pair) {
    pair = pair.split(/\s*=\s*/);
    output[pair[0]] = pair.splice(1).join('=');
    });
    var json = JSON.stringify(output, null, 4);
    console.log(json);
    cookie = JSON.parse(json);
    console.log(cookie.token);
    const { _id} = jwt.decode(cookie.token);
    console.log(_id);
    
    
    
    const history=useHistory();
    const handleSubmit = () => {
    history.push('/employee/technical/employeeDash');
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
                <div class="input_field"><label>Name</label><input type="text" className="input" required/></div>
                <div class="input_field"><label>Date of Birth</label><input type="date" className="input"  required/></div>
                <div class="input_field"><label>Email address</label><input type="email" className="input"  required/></div>
                <div class="input_field"><label>Contact Number</label><input type="text" className="input"  required/></div>
                <div class="input_field"><label>Duration available(in months)</label><input type="number" className="input" required/></div>
                <div class="input_field"><label>Highest Qualification</label><input type="text" className="input"  required/></div>
                
                <div class="input_field"><label>Specialisation</label>
                <div class="custom_select">
                <select>
                <option value="">Select</option>
                <option value="IT">IT/Engineer/Freelancer</option>
                <option value="Teacher">Teacher</option>
                </select>
                </div>
                </div>

                <div class="input_field"><label>Skills</label><textarea className="textarea"></textarea></div>
                <div class="input_field"><label>Years of Experience</label><input type="number" className="input" required/></div>
                
                <div class="input_field"><label>Gender</label>
                <div class="custom_select">
                <select>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                </select>
                </div>
                </div>

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
                <div class="input_field"><label>Resume</label><input type="file" className="input" /></div>
                <div class="input_field"><input type="submit" className="btn" value="Submit"/></div>
                
            </form>
            </div>
            </div>
            </div>
       
     );
}
 
export default TechnicalForm;