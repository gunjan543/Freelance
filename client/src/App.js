import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import {Switch} from 'react-router-dom';
import React,{Component, Suspense} from 'react';

import './css/about.css';
import './css/dashboard.css';
import './css/employee.css';
import './css/footer.css';
import './css/future.css';
import './css/google.css';
import './css/header.css';
import './css/logo.css';
import './css/main.css';
import './css/profile.css';
import './css/request.css';
import './css/services.css';
import './css/Signup.css';
import './css/styles.css';
import './css/loader.css';
//const Home = React.lazy(() => import('./modules/pages/Home'));
import Loader from './components/Loader'
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import About from './components/About/About'
import Footer from './components/Footer/Footer';
const Login = React.lazy(()=>import('./components/Login/login'));
const Activate= React.lazy(()=>import('./components/Login/activate'));
const Register= React.lazy(()=>import( './components/Login/Signup'));
const Reset= React.lazy(()=>import( './components/Login/Reset'));
const Forget= React.lazy(()=>import( './components/Login/ForgetPassword'));
const EmployeeForm= React.lazy(()=>import( './components/EmployeeForm/employeeForm'));
const EmployerForm= React.lazy(()=>import( './components/EmployeeForm/employerForm'));
const TechnicalForm= React.lazy(()=>import( './components/EmployeeForm/TechnicalForm'));
const NonTechnicalForm= React.lazy(()=>import( './components/EmployeeForm/non-technical'));
const EmployeeDash = React.lazy(()=>import('./components/Dashboard/employee'));
const EmployeeNonTechProfile = React.lazy(()=>import('./components/Dashboard/EmployeeNonTechProfile'));
const EmployeeTechProfile = React.lazy(()=>import('./components/Dashboard/EmployeeTechProfile'));
const Help = React.lazy(()=>import('./components/Dashboard/help'));
const EmployerProfile = React.lazy(()=>import('./components/Dashboard/employerProfile'));
const EmployerDash= React.lazy(()=>import( './components/Dashboard/employerDash'));
const JobDescription = React.lazy(()=>import('./components/JobDescription/Jd'));
const Requests = React.lazy(()=>import('./components/Dashboard/request'));
const Future = React.lazy(()=>import('./components/Dashboard/future'));


class App extends Component{
  render(){
  return (
    <Suspense fallback={<Loader/>}>
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
    </Suspense>
  );
}}

export default App;