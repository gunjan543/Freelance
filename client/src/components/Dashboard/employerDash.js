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

    sendRequest(userID){
      console.log(userID);

      let {_id} = JSON.parse(localStorage.getItem('user'));
      Axios.post(`${process.env.REACT_APP_API_URL}/employerRequest`,{userID: userID, employerID:_id})
      .then(res =>{
        console.log(res);
      })
    }

    displayUser(user){
      return this.state.users.map((user)=>{
        return <div>
        <li id = "username">{user.name}</li>
        <button type="submit" onClick = {()=>{this.sendRequest(user._id)}}>Click </button>
        </div>
      })
     

    }
    render(){ 
      console.log(this.state.users);
     
        
    return ( 
      <div>
  <div className="dash"> 
  <Navbars />
  </div>
  <div>{ this.displayUser()}</div>
  </div>

);}
    }
