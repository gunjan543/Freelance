import React, { Component } from 'react';
import Navbar2 from './Navbar2';
import './request.css';
import Axios from 'axios';

export default class Requests extends Component{
    constructor(props){
        
        super(); 
        this.state={
            users:[]
        }
        }
        componentDidMount(){
         
            let {_id} = JSON.parse(localStorage.getItem('user'));
            Axios
            .post(`${process.env.REACT_APP_API_URL}/getApplicants`, {_id})
            .then( res=>{ 
             const users = res.data;
             this.setState({users});
             console.log(this.state.users);
            }
            )
          }
         
    render(){
        return(
            <div className="requests">
            <Navbar2 />
            <button class="logoutBtn">
        <svg width="120px" height="50px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>Logout</span>
      </button>
      <div className="data-container rq">
      <h3>Applicants</h3>
      </div>
           {this.state.users.map((user) =>{
               return(
                   <div className="request-data curled">
                   <h4>{user.jobTitle}</h4>
                   <h6>{user.applicant.name}</h6>
                   <p>Skills: {user.applicant.skills}</p>
                   <p>Gender: {user.applicant.gender}</p>
                   <h5>Contact for further procedure</h5>
                   <p>Email:{user.applicant.email}</p>
                   <p>Contact Number:{user.applicant.contactNumber}</p>
                  
                   </div>
               )
           })}
         
          </div>
        )
    }
 
}