import React from 'react';
import './profile.css';
import Accordion from 'react-bootstrap/Accordion';
import "../Header/header.css";
import Card from 'react-bootstrap/Card';
import Navbars from './Navbar';

const EmployerProfile = () => {
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
        <div className="container"><h4>Organisation Name - </h4><p>ABC Limited</p></div>
        <div className="container"><h4>Full Name - </h4><p>John Baeur</p></div>
        <div className="container"><h4>Date of Birth - </h4><p>04/07/2000</p></div>         
        </Card.Body>
        </Accordion.Collapse>
        </Card>
        <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
        <h1><i class="fa fa-address-book"></i>Contact Details</h1>
       </Accordion.Toggle>
       <Accordion.Collapse eventKey="1">
       <Card.Body>
        <div className="container"><h4>Email - </h4><p>John@gmail.com</p></div>
        <div className="container"><h4>Contact Number - </h4><p>7656768767</p></div>
        <div className="container"><h4>ID Proof - </h4><p>Driving Licence - 6535667767267</p></div>
        <div className="container"><h4>Address-</h4><p>543 street , malviya Nagar Jaipur Ahdbj bdyuegdb bdyuegdb</p></div>
        <div className="container"><h4>Postal Code - </h4><p>203987</p></div>
        </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
        <Accordion.Toggle as={Card.Header} eventKey="4">
        <h1><i class="fa fa-key"></i>Change password</h1>
       </Accordion.Toggle>
       <Accordion.Collapse eventKey="4">
       <Card.Body>
        <div className="container"><h4>password - </h4><p>JOHNABC</p></div>
        <div className="container"><a href="#">Change password</a></div>
        </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</div>
        </div>
        
     );
}
 
export default EmployerProfile;