import React from 'react';
import Logo from '../Logo/logo';

 const Main = () => {

     return (  
         <div className="main">
           <Logo />

           <h5>CHOOSE THE SERVICE YOU WANT TO AVAIL</h5>

           <div id="wrapper">
             <div id="left">
                 <h2>Become Employee</h2>
                 <p>Find suitable work for yourself according to your time and convenience among 1000's of jobs</p>
                 <br></br>
                 <a href="/login"><button>Employee Register</button></a>
             </div>

             <div className="vertical-row"></div>
             
             <div id="right">
                 <h2>Become Employer</h2>
                 <p>Find suitable employee for your work according to your time requirements among 1000's of employee</p>
                 <br></br>
                 <a href="/login"><button>Employee Register</button></a>
             </div>
          </div>

        </div>
     );
 }
  
 export default Main;