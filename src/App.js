import React,{Component} from 'react'
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import About from './components/About/About'
import Footer from './components/Footer/Footer';
import Login from './components/Login/login';
import Signup from './components/Login/Signup';
import Main from './components/Login/main';
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
       <Route path="/login" exact strict component={Login} />
      </div>   
    </Router>  
  );
}}

export default App;
