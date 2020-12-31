import React, { Component } from 'react';
import Logo from '../Logo/logo';
import {  isAuth } from '../../helpers/auth';
import { Redirect } from 'react-router-dom';
import './employee.css';
import { BrowserRouter as Router ,useHistory} from 'react-router-dom';
import Axios from 'axios';


export default class NonTechnicalForm extends Component{

   constructor(props){
      super()
      let {name, email, category} = JSON.parse(localStorage.getItem('user'));
      this.state = {
          name: name,
          email:email,
          category:category,
          dateOfBirth:'',
          contactNumber:0,
      
          highestQualification:'',
          specialisation:'',
          skills:'',
          yearsOfExperience:0,
          gender:'',
          idProof:'',
          idNumber:'',
          address:'',
          postalCode:'',
          resume:{},
          form:true
      };
     // console.log(name);

   }
   handleChange = text => e => {
                
      this.setState({ ...this.state, [text]: e.target.value });
      console.log(e.target.value);
    };
 

    handleSubmit = e => {
      e.preventDefault();

      this.setState({...this.state});
      Axios
      .post(`${process.env.REACT_APP_API_URL}/technicalForm`,
        this.state
         
      )
      .then(res => {
          console.log(res);
          
      }
      )
      .catch(err => {
          console.log(err);
            
          });
          this.props.history.push('/employeeDash/nonTechnical')
  };
  render() {
  return ( 
    <div>
        
            <Logo />
            <div className="box3">
            <div class="title">  
            <h2>Complete your Profile</h2>
            <h3>Just one last step !  :) </h3>
            </div>  
            <div class="form">
            <form onSubmit={this.handleSubmit}>
               <div class="input_field"><label>Name</label><input type="text" className="input" required value = {this.state.name}/></div>
                <div class="input_field"><label>Date of Birth</label><input type="date" className="input" onChange = {this.handleChange('dateOfBirth')} required/></div>
                <div class="input_field"><label>Email address</label><input type="email" className="input" value = {this.state.email} required/></div>
                <div class="input_field"><label>Contact Number</label><input type="text" className="input" onChange = {this.handleChange('contactNumber')} required/></div> 
                <div class="input_field" onChange = {this.handleChange('specialisation')}><label>Specialisation</label>

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

                <div class="input_field" onChange = {this.handleChange('skills')}><label>Skills</label><textarea className="textarea"></textarea></div>
                
                <div class="input_field" onChange = {this.handleChange('yearsOfExperience')}><label>Years of Experience</label><input type="number" className="input" required/></div>
                
                <div class="input_field" onChange = {this.handleChange('gender')}><label>Gender</label>
                <div class="custom_select" >
                <select>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                </select>
                </div>
                </div>

                <div class="input_field" onChange = {this.handleChange('idProof')}><label>ID Proof</label>
                <div class="custom_select">
                <select>
                <option value="">Select</option>
                <option value="Aadhar Card">Aadhar Card</option>
                <option value="Driving License">Driving License</option>
                <option value="Voter Id">Voter ID</option>
                </select>
                </div>
                </div>

                <div class="input_field" onChange = {this.handleChange('idNumber')}><label>ID Number</label><input type="number" className="input" required/></div>
                <div class="input_field" onChange = {this.handleChange('address')}><label>Address</label><textarea className="textarea"></textarea></div>
                <div class="input_field" onChange = {this.handleChange('postalCode')}><label>Postal Code</label><input type="text" className="input"  required/></div>
                <div class="input_field"><input type="submit" className="btn" value="Submit"/></div>
                
            </form>
            </div>
            </div>
            </div>
   );
}
}
 
