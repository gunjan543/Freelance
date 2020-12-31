import React,{Component} from 'react'
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import About from './components/About/About'
import Footer from './components/Footer/Footer';
import Login from './components/Login/login';
import Register from './components/Login/Signup';
import Activate from './components/Login/activate';
import Reset from './components/Login/Reset';
import Forget from './components/Login/ForgetPassword';
import { BrowserRouter as Router ,useHistory} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import {Switch} from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm/employeeForm';
import EmployerForm from './components/EmployeeForm/employerForm';
import TechnicalForm from './components/EmployeeForm/TechnicalForm';
import NonTechnicalForm from './components/EmployeeForm/non-technical';
import EmployeeDash from './components/Dashboard/employee';
import EmployeeNonTechProfile from './components/Dashboard/EmployeeNonTechProfile';
import EmployeeTechProfile from './components/Dashboard/EmployeeTechProfile';
import Help from './components/Dashboard/help';
import EmployerProfile from './components/Dashboard/employerProfile';
import EmployerDash from './components/Dashboard/employerDash';
import JobDescription from './components/JobDescription/Jd';
import Requests from './components/Dashboard/request';
import Future from './components/Dashboard/future';

class App extends Component{
  render(){
  return (
    <Router>
    <Switch>
     {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <div>
        <Route path="/" exact strict render={props =>
          <div>
           < Header />
           <Services/>
           <About/>
          
           <Footer/>
         </div>
} />  
       <Route path="/future" exact strict component ={Future} />
      <Route path="/employeeDash/technical" exact render={props => <EmployeeDash {...props}/>} />
      <Route path="/nonTechnical" exact strict component={EmployeeDash} />
      <Route path="/employeeDash/technical/EmployeeTechProfile" exact strict component={EmployeeTechProfile} />
      <Route path="/nonTechnical/EmployeeNonTechProfile" exact strict component={EmployeeNonTechProfile} />
      <Route path="/employeeDash/technical/help" exact strict component={Help} />
      <Route path="/nonTechnical/help" exact strict component={Help} />
      <Route path="/employerDash/help" exact strict component={Help} />
      <Route path="/employerDash/employerProfile" exact strict component={EmployerProfile} />
      <Route path="/employerDash" exact strict component={EmployerDash} />
      <Route path="/addJob" exact strict component={JobDescription} />
      <Route path='/employee/technical' exact render={props => <TechnicalForm {...props}/>} />
      <Route path='/employee/nontechnical' exact render={props => <NonTechnicalForm {...props} />} />
      <Route path="/employer" exact strict component ={EmployerForm} />
      <Route path="/employee" exact strict component={EmployeeForm} />
      <Route path='/login' exact render={props => <Login {...props} />} />
      <Route path='/register' exact render={props => <Register {...props} />} />
      <Route path='/users/password/forget' exact render={props => <Forget {...props} />} />
      <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
      <Route path='/users/password/reset/:token' exact render={props => <Reset {...props} />} />
      <Route path='/activate/login' exact render={props => <Login {...props} />} />
      <Route path='/employerDash/requests' exact render={props => <Requests {...props} />} />
      </div>
      </Switch>   
    </Router>  
  );
}}

export default App;