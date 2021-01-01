import React, { Component } from 'react';
import './profile.css';
import './styles.css';
import Navbar2 from './Navbar2';
import Axios from 'axios';
import {Redirect} from "react-router-dom";
import {isAuth} from "../../helpers/auth";
import {removeCookie, removeLocalStorage} from '../../helpers/auth';

export default class EmployerProfile extends Component {

  constructor(props){
    super();
    let { email} = JSON.parse(localStorage.getItem('user'));
    this.state = {
      email:email,
      user:{}
    
    }
    }
    componentDidMount(){
  
      console.log(this.state.email);
     Axios
      .post(`${process.env.REACT_APP_API_URL}/getUser`, this.state)
      .then( res=>{ 
       const user = res.data;
       this.setState({user});
    }
      )
    }
    render(){
      const {history} = this.props;
      function signout(){
        removeCookie('token');
        removeLocalStorage('user');
        history.push('/');
      } 
    return ( 
        <div>
         {!isAuth()?<Redirect to='/login'/> :null}
          <Navbar2 />
          <button class="logoutBtn"  onClick = {signout}>
          <svg width="120px" height="50px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
          </svg>
          <span>Logout</span>
          </button>
        <div className="data"> 
        <div className="data-container">
        <h3>Personal Info  <i class="fa fa-user"></i></h3>
        <div className="data-containers"><h4>Organisation Name -  </h4><p> {this.state.user.organisationName}</p></div>
        <div className="data-containers"><h4>Full Name - </h4><p>{this.state.user.name}</p></div>
        <div className="data-containers"><h4>Date of Birth - </h4><p>{this.state.user.dateOfBirth}</p></div>    
        </div>
        <div className="data-container">
        <h3>Contact Details  <i class="fa fa-address-book"></i></h3>
        <div className="data-containers"><h4>Email - </h4><p>{this.state.user.email}</p></div>
        <div className="data-containers"><h4>Contact Number - </h4><p>{this.state.user.contactNumber}</p></div>
        <div className="data-containers"><h4>ID Proof - </h4><p>{this.state.user.idProof}-{this.state.user.idNumber}</p></div>
        <div className="data-containers"><h4>Address-</h4><p>{this.state.user.address}</p></div>
        <div className="data-containers"><h4>Postal Code - </h4><p>{this.state.user.postalCode}</p></div>
        </div>
        <div className="data-container">
        <h3>Change password  <i class="fa fa-key"></i></h3> 
        <div className="data-containers"><a href="/users/password/forget">Change password</a></div>
        </div>
        </div>
        </div>
        
     );
}
}