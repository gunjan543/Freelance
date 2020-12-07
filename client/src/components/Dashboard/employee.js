import React from 'react';
import '../Header/header.css';
import Navbars from './Navbar';
import './dashboard.css';


const EmployeeDash = () => {

  const handleLink =()=>{
    console.log(window.location.pathname);
  }

    return ( 
  <div>
  <div className="dash"> 
  <Navbars forLink={handleLink}/>
  </div> 
  <h1>No work right now!</h1>
  
  </div>

);}
 
export default EmployeeDash;