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
import Main from './components/Login/main';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import {Redirect, Switch} from 'react-router-dom';


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
      <Route path="/MainLog" exact strict component={Main} />
      <Route path="/MainLog/login" exact strict component={Login} />
      <Route path='/login' exact render={props => <Login {...props} />} />
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
