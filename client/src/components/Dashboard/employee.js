import React, { Component } from 'react';
import '../Header/header.css';
import Navbars from './Navbar';
import './dashboard.css';
import Axios from 'axios';


export default class EmployeeDash extends Component  {
render (){ 
return(
  <div>
  <div className="dash"> 
  <Navbars />
  </div> 
  <h1>No work right now!</h1>
  </div>
      );}
      }

