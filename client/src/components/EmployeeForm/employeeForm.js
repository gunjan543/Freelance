import React from 'react';
import Logo from '../Logo/logo';
import './employee.css';

const EmployeeForm = () => {
    return ( 
        <div className="EmployeeForm">
            <Logo />
            <div className="box2">
                <h2>Choose your speciality</h2>
                <a href="/MainLog/login/employee"><button>Technical or Educational</button></a>
                <p>IT,Engineers,Teachers,Freelancer</p>
                <a href=""><button>Non-Technical or Others</button></a>
                <p>Plumbers,Painters,Maid or House Workers,Staff</p>
            </div>
                
        </div>
     );
}
 
export default EmployeeForm;