import React from 'react';
import Navbar2 from './Navbar2';
import { Component } from 'react';
import lady from "../images/lady.png";
import {removeCookie, removeLocalStorage} from '../../helpers/auth';
export default class EmployerDash extends Component {

  constructor(props){
    super();
    let { name } = JSON.parse(localStorage.getItem('user'));
    this.state = {
      category:'employee',
      name:name
    }
    }
    componentDidMount () {
      const script = document.createElement("script");
      script.src = "./theme.js";
      script.async = true;
      document.body.appendChild(script);
  }


    render(){ 
      const {history} = this.props;
      function handleClick(){
      history.push("/addJob");
      }
      function signout(){
        removeCookie('token');
        removeLocalStorage('user');
        history.push('/');
      }
        
    return ( 
    <div className="employer">
    <div className="dash"> 
    <Navbar2 />
    </div>
    {/* <div>{ this.displayUser()}</div> */}
    <button class="logoutBtn" onClick = {signout}>
        <svg width="103px" height="41px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>Logout</span>
      </button>
      <div className="employerUser">
    <h2>Welcome {this.state.name}</h2>
    <h6>Nice to see you again!</h6>
    <h4>Want a suitable employee for your work?</h4>
    <button type = "Submit" onClick = {handleClick}>Just Add a Job </button>
    
    <h5>You will soon be hearing from interested employees in the requests tab</h5>
    <img  className="empImg" src={lady} alt = ""/>
    </div>
   
    </div>
);}
    }
