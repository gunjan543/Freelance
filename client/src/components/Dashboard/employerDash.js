import React from 'react';
import '../Header/header.css';
import Navbars from './Navbar';
import './dashboard.css';
import { Component } from 'react';
import Axios from 'axios';


export default class EmployerDash extends Component {
  constructor(){
    super();
    this.state = {
      category:'employee',
      user:{}
    }
    }
    
    componentDidMount(){
  
      console.log(this.state);
      Axios
      .post(`${process.env.REACT_APP_API_URL}/getUsers`, this.state)
      .then( res=>{ 
       const user = res.data;
       this.setState({user});
    }
      )
    }
    render(){ 
    return ( 
  <div className="dash"> 
  <Navbars />
  
  </div>
);}
    }
