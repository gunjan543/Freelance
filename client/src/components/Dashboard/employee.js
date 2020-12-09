import React, { Component } from 'react';
import '../Header/header.css';
import Navbars from './Navbar';
import './dashboard.css';
import Axios from 'axios';


export default class EmployeeDash extends Component  {

componentDidMount(){
  Axios.get(`${process.env.REACT_APP_API_URL}`)
  .then(res=>{
    console.log(res);

  },
  err => {
    console.log(err)
  })

}


    render (){ 
      return(
  <div>
  <div className="dash"> 
  <Navbars/>
  </div> 
  <h1>No work right now!</h1>
  
  </div>

      );}
      }

