import React from 'react'
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import About from './components/About/About'
import Footer from './components/Footer/Footer';
import Login from './components/Login/login';
import Signup from './components/Login/Signup';

function App() {
  return (
    <div>
  	
	<Header />
    <About/>
    <Services/>
    <Footer/>

    </div>   
      
    
  );
}

export default App;
