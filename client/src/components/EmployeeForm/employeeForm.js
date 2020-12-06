import React from 'react';
import Logo from '../Logo/logo';
import './employee.css';
import {  isAuth } from '../../helpers/auth';
import { Redirect } from 'react-router-dom';

const EmployeeForm = () => {
    return ( 
        <div className="EmployeeForm">
         {isAuth() ? <Redirect to='/' /> : null}
            <Logo />
            <div className="box2">
                <h2>Choose your speciality</h2>
                <a href="employee/technical"><button>Technical or Educational</button></a>
                <p>IT,Engineers,Teachers,Freelancer</p>
                <a href="employee/nontechnical"><button>Non-Technical or Others</button></a>
                <p>Plumbers,Painters,Maid or House Workers,Staff</p>
            </div>
                
        </div>
     );
}
 
export default EmployeeForm;