import React from 'react';
import '../Header/header.css';
import Navbars from './Navbar';
import './dashboard.css';
import { Component } from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";

export default class EmployerDash extends Component {
  constructor(props){
    super();
    this.state = {
      category:'employee',
    
    }
   
    
    }

    render(){ 
      const {history} = this.props;
      
      function handleClick(){
      
        history.push("/addJob");
      }
        
    return ( 
      <div>
  <div className="dash"> 
  <Navbars />
  </div>
  {/* <div>{ this.displayUser()}</div> */}
  <button type = "Submit" onClick = {handleClick}>Add a Job </button>
  </div>

);}
    }
