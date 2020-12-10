import React, {Component} from 'react';
import Navbars from './Navbar';
import './profile.css';
import "../Header/header.css";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import Axios from 'axios';

export default class EmployeeTechProfile extends Component {

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
        <div className="container"><h4>Full Name - </h4><p>{this.state.user.name}</p></div>
        <div className="container"><h4>Date of Birth - </h4><p>{this.state.user.dateOfBirth}</p></div>
        <div className="container"><h4>Gender - </h4><p>{this.state.user.gender}</p></div>           
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
        <div className="container"><h4>ID Proof - </h4><p>{this.state.user.idProof}</p></div>
        <div className="container"><h4>Address-</h4><p>{this.state.user.address}</p></div>
        <div className="container"><h4>Postal Code - </h4><p>{this.state.user.postalCode}</p></div>
        </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
        <h1><i class="fa fa-graduation-cap"></i>Specialisation and Skills</h1>
       </Accordion.Toggle>
       <Accordion.Collapse eventKey="2">
       <Card.Body>
        <div className="container"><h4>Highest Qualification - </h4><p>{this.state.user.highestQualification}</p></div>
        <div className="container"><h4>Specialisation - </h4><p>{this.state.user.specialisation}</p></div>
        <div className="container"><h4>Skills - </h4><p>{this.state.user.skills}</p></div>
        <div className="container"><h4>Years of experience - </h4><p>{this.state.user.yearsOfExperience}</p></div>
        </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
        <Accordion.Toggle as={Card.Header} eventKey="3">
        <h1><i class="fa fa-clock-o"></i>{this.state.user.durationAvailable}</h1>
       </Accordion.Toggle>
       <Accordion.Collapse eventKey="3">
       <Card.Body>
       <input type="checkbox" id="duration" name="duration" value="Available" /><label for="Duration"> Available </label>
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
/*  {
        name
        /*email,
        category,
        dateOfBirth,
        contactNumber,
        durationAvailable,
        highestQualification,
        specialisation,
        skills,
        yearsOfExperience,
        gender,
        idProof,
        idNumber,
        address,
        postalCode*/   