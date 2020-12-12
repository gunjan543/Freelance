import React from 'react';
import Logo from '../Logo/logo';
import './employee.css';
import {  isAuth } from '../../helpers/auth';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

const EmployeeForm = () => {
    const handleClick= (e) =>
    { 
        let  {email} = JSON.parse(localStorage.getItem('user'));
        var user ={email:email,subCategory:e.target.value}
        localStorage.setItem('subCategory', e.target.value);
        
        Axios
        .post(`${process.env.REACT_APP_API_URL}/technicalForm`,
          user
           
        )
        .then(res => {
            console.log(res);
        }
        )
        .catch(err => {
            console.log(err);
              
            });
           
      console.log(e.target.value);
    }
    return ( 
        <div className="EmployeeForm">
            <Logo />
            <div className="box2">
                <h2>Choose your speciality</h2>
                <a href="employee/technical"><button onClick={handleClick} value="Technical">Technical or Educational</button></a>
                <p>IT,Engineers,Teachers,Freelancer</p>
                <a href="employee/nontechnical"><button onClick={handleClick} value="Non Technical">Non-Technical or Others</button></a>
                <p>Plumbers,Painters,Maid or House Workers,Staff</p>
            </div>
                
        </div>
     );
}
 
export default EmployeeForm;