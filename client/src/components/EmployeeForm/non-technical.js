import React from 'react';
import Logo from '../Logo/logo';
import './employee.css';

const NonTechnicalForm = () => {
    return ( 
        <div className>
            <Logo />
            <div className="box3">
            <div class="title">  
            <h2>Complete your Profile</h2>
            <h3>Just one last step !  :) </h3>
            </div>  
            <div class="form">
            <form>
                <div class="input_field"><label>Name</label><input type="text" className="input" required/></div>
                <div class="input_field"><label>Date of Birth</label><input type="date" className="input"  required/></div>
                <div class="input_field"><label>Email address</label><input type="email" className="input"  required/></div>
                <div class="input_field"><label>Contact Number</label><input type="text" className="input"  required/></div>
                <div class="input_field"><label>Duration available(in months)</label><input type="number" className="input" required/></div>
               
                <div class="input_field"><label>Specialisation</label>
                <div class="custom_select">
                <select>
                <option value="">Select</option>
                <option value="IT">Painter</option>
                <option value="Teacher">Plumber</option>
                <option value="Teacher">Staff</option>
                <option value="Teacher">House Worker/Maid</option>
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
                <option value="Voter Id">Voted ID</option>
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
 
export default NonTechnicalForm;