import React,{Component} from 'react'
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import About from './components/About/About'
import Footer from './components/Footer/Footer';
import Login from './components/Login/login';
import Signup from './components/Login/Signup';
import Welcome from './components/Login/welcome';
import Main from './components/Login/main';
import EmployeeForm from './components/EmployeeForm/employeeForm';
import TechnicalForm from './components/EmployeeForm/TechnicalForm';
import NonTechnicalForm from './components/EmployeeForm/non-technical';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component{
  render(){
  return (
    <Router>
      <div>
        <Route path="/" exact strict render={props =>
          <div>
           < Header />
           <About/>
           <Services/>
           <Footer/>
         </div>
} />
       <Route path="/MainLog" exact strict component={Main} />
       <Route path="/MainLog/login" exact strict component={Login} />
       <Route path="/signup" exact strict component={Signup} />
       <Route path="/signup/welcome" exact strict component={Welcome} />
       <Route path="/login" exact strict component={Login} />
       <Route path="/MainLog/login/employee" exact strict component={EmployeeForm} />
       <Route path="/MainLog/login/employee/technical" exact strict component={TechnicalForm} />
       <Route path="/MainLog/login/employee/nonTechnical" exact strict component={NonTechnicalForm} />
      </div>   
    </Router>  
  );
}}

export default App;
