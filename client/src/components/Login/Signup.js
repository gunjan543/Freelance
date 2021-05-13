import React, {useState} from 'react';
import Logo from '../Logo/logo';
//import authSvg from "../assets/auth.svg";
import {ToastContainer, toast} from 'react-toastify';
import {isAuth} from "../../helpers/auth";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


const Register = (history) => {

  let category1='';
  let subCategory='';
    const [formData, setFormData] = useState({

        name:"",
        email:"",
        password1:"",
        password2:"",
    });
    let category = "";
    const {email,name,password1, password2} = formData

    const handleChange = text => e => {
        
        setFormData({ ...formData, [text]: e.target.value });
      };
   
     const handleSelect = (e) =>{
      category=e;
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (name && email && password1) {
          if (password1 === password2) {
            setFormData({ ...formData });
            axios
              .post( `/api/register`, {
                name,
                email,
                category,
                password: password1
              })
              .then(res => {
                setFormData({
                  ...formData,
                  name: '',
                  email: '',
                  password1: '',
                  password2: ''
                  
                }
               
                );
                
                toast.success(res.data.message);
                
              })
              .catch(err => {
                setFormData({
                  ...formData,
                  name: '',
                  email: '',
                  password1: '',
                  password2: ''
                  
                });
                console.log(err);
                toast.error(err.response.data.errors);
              });
          } else {
            toast.error("Passwords don't match");
           
          }
        } else {
          toast.error('Please fill all fields');
        }
      };

      if (isAuth()){
        category1 = JSON.parse(localStorage.getItem('user')).category;
        subCategory = JSON.parse(localStorage.getItem('user')).subCategory;}

    return ( 
        <div className="Signup">
        {isAuth()? category1 === "employee"?subCategory === 'technical'?<Redirect to = '/employeeDash/technical'/>:<Redirect to = '/nonTechnical' />:<Redirect to = '/employerDash' />:null}
        
        <ToastContainer/>
            <Logo />
            <h1>Sign Up to BYOB</h1>
            <p>Already have an account? <a href="/login">Log In</a></p>
            
            <div className="wrap">
            <div className="box">
            <form onSubmit={handleSubmit}>
                 <div>
                    <input type="text" 
                    onChange = {handleChange('name')} 
                    value={name}
                    required/>
                    <label>Name</label>
                </div>
                <div>
                    <input type="email" 
                    onChange = {handleChange('email')} 
                    value={email}
                    required/>
                    <label>Email</label>
                </div>
                <div>
                    <input type="password" required 
                    onChange = {handleChange('password1')} 
                    value={password1}                    
                    />
                    <label>Password</label>
                </div>
                <div>
                    <input type="password" 
                    onChange = {handleChange('password2')} 
                    value={password2}                 
                    required />
                    <label>Confirm Password</label>
                </div>
                <DropdownButton
                  alignRight
                  className="category"
                  title="Choose Category"
                  id="dropdown"
                  onSelect={handleSelect}
                >
                  <Dropdown.Item eventKey="employee">Register As Employee</Dropdown.Item>
                  <Dropdown.Item eventKey="employer">Register As Employer</Dropdown.Item>
                
                </DropdownButton>
                <input type="submit" name="Signup" value="submit" />
            </form>
            </div>
            
        </div>
        </div>
     );
}
 
export default Register;