import React,{Component} from 'react';
import Logo from '../Logo/logo';
import './employee.css';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import {  isAuth } from '../../helpers/auth';

export default class EmployerForm extends Component {
    
    constructor(){
        
        super()
        let {name, email, category} = JSON.parse(localStorage.getItem('user'));
        this.state = {
            name: name,
            email:email,
            category:category,
            organisationName:'',
            dateOfBirth:'',
            contactNumber:0,
            idProof:'',
            idNumber:'',
            address:'',
            postalCode:'',
            form:true
        };
        
      } 
    handleChange = text => e => {
                
        this.setState({ ...this.state, [text]: e.target.value });
        console.log(e.target.value);
      };
   

    handleSubmit = e => {
        e.preventDefault();
        
        this.setState({...this.state});
        Axios
        .post(`/api/technicalForm`,
          this.state
           
        )
        .then(res => {
            console.log(res);
            this.props.history.push("/employerDash");
            
        }


        )
        .catch(err => {
            console.log(err);
              
            });
           

    };    
        
    render(){
    return (  
        
        <div>
             {!isAuth()?<Redirect to='/login'/> :null}
            <Logo />
            <div className="box3">
            <div class="title">  
            <h2>Complete your Profile</h2>
            <h3>Just one last step !  :) </h3>
            </div>  
            <div class="form">
            <form onSubmit={this.handleSubmit}>
                <div class="input_field"><label>Organisation Name</label><input type="text" className="input" onChange={this.handleChange('organisationName')}/></div>
                <div class="input_field"><label>Name</label><input type="text" className="input" value={this.state.name} required/></div>
                <div class="input_field"><label>Date of Birth</label><input type="date" className="input"  onChange={this.handleChange('dateOfBirth')} required/></div>
                <div class="input_field"><label>Email address</label><input type="email" className="input"  value={this.state.email} required/></div>
                <div class="input_field"><label>Contact Number</label><input type="text" className="input"  onChange={this.handleChange('contactNumber')} required/></div>

                <div class="input_field" onChange={this.handleChange('idProof')}><label>ID Proof</label>
                <div class="custom_select">
                <select>
                <option value="">Select</option>
                <option value="Aadhar Card">Aadhar Card</option>
                <option value="Driving License">Driving License</option>
                <option value="Voter Id">Voter ID</option>
                </select>
                </div>
                </div>

                <div class="input_field"><label>ID Number</label><input type="number" className="input" onChange={this.handleChange('idNumber')} required/></div>
                <div class="input_field"><label>Address</label><textarea className="textarea" onChange={this.handleChange('address')}></textarea></div>
                <div class="input_field"><label>Postal Code</label><input type="text" className="input"  onChange={this.handleChange('postalCode')} required/></div>
                
                <div class="input_field"><input type="submit" className="btn" value="Submit"/></div>
                
            </form>
            </div>
            </div>
            </div>
       
     );
}}
 
