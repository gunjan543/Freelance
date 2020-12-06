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
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import {Redirect, Switch} from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm/employeeForm'
import TechnicalForm from './components/EmployeeForm/TechnicalForm';
import NonTechnicalForm from './components/EmployeeForm/non-technical';

class App extends Component{
  render(){
  return (
    <Router>
    <Switch>
      <div>
        <Route path="/" exact strict render={props =>
          <div>
           < Header />
           <About/>
           <Services/>
           <Footer/>
         </div>
} />  
      
      <Route path="/employee" exact strict component={EmployeeForm} />
      <Route path='/login' exact render={props => <Login {...props} />} />
      <Route path='/employee/technical' exact render={props => <TechnicalForm {...props} />} />
      <Route path='/employee/nontechnical' exact render={props => <NonTechnicalForm {...props} />} />
      <Route path='/register' exact render={props => <Register {...props} />} />
      <Route path='/users/password/forget' exact render={props => <Forget {...props} />} />
      <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
      <Route path='/users/password/reset/:token' exact render={props => <Reset {...props} />} />
      </div>
      </Switch>   
    </Router>  
  );
}}

export default App;