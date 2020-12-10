import React, { Component } from 'react';
import './profile.css';
import Accordion from 'react-bootstrap/Accordion';
import "../Header/header.css";
import Card from 'react-bootstrap/Card';
import Navbars from './Navbar';
import Axios from 'axios';
export default class EmployerProfile extends Component {

  constructor(){
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
    return ( 
        <div>
          <div className="header"><Navbars /></div>
       
        <div className="accord">
        <Accordion>
        <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
        <h1><i class="fa fa-user"></i>Personal Info</h1>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
        <Card.Body>
        <div className="container"><h4>Organisation Name - </h4><p>{this.state.user.organisationName}</p></div>
        <div className="container"><h4>Full Name - </h4><p>{this.state.user.name}</p></div>
        <div className="container"><h4>Date of Birth - </h4><p>{this.state.user.dateOfBirth}</p></div>         
        </Card.Body>
        </Accordion.Collapse>
        </Card>
        <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
        <h1><i class="fa fa-address-book"></i>Contact Details</h1>
       </Accordion.Toggle>
       <Accordion.Collapse eventKey="1">
       <Card.Body>
        <div className="container"><h4>Email - </h4><p>{this.state.user.email}</p></div>
        <div className="container"><h4>Contact Number - </h4><p>{this.state.user.contactNumber}</p></div>
        <div className="container"><h4>ID Proof - </h4><p>{this.state.user.idProof}-{this.state.user.idNumber}</p></div>
        <div className="container"><h4>Address-</h4><p>{this.state.user.address}</p></div>
        <div className="container"><h4>Postal Code - </h4><p>{this.state.user.postalCode}</p></div>
        </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
        <Accordion.Toggle as={Card.Header} eventKey="4">
        <h1><i class="fa fa-key"></i>Change password</h1>
       </Accordion.Toggle>
       <Accordion.Collapse eventKey="4">
       <Card.Body>
        
        <div className="container"><a href="/users/password/forget">Change password</a></div>
        </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</div>
        </div>
        
     );
}
}