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
      users:[]
    }
    }
    
    componentDidMount(){
      Axios
      .post(`${process.env.REACT_APP_API_URL}/getUsers`, this.state)
      .then( res=>{ 
       const users = res.data;
       this.setState({users});
       
    }
      )
    }
    render(){ 
      console.log(this.state.users);
      const listOfEmployee = this.state.users.map(user => <li>{user.name}</li>);
    return ( 
      <div>
  <div className="dash"> 
  <Navbars />
  </div>
  <p>{listOfEmployee}</p>
  </div>

);}
    }
