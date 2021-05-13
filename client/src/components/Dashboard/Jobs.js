import React, { Component } from 'react';
import Navbar2 from './Navbar2';
import Axios from 'axios';
import {Redirect} from "react-router-dom";
import {isAuth} from "../../helpers/auth";
import {removeCookie, removeLocalStorage} from '../../helpers/auth';

export default class EmployerProfile extends Component {

  constructor(props){
    super();
    let { _id} = JSON.parse(localStorage.getItem('user'));
    this.state = {
      id:_id,
      jobs:[]
    
    }
    
    }
    componentDidMount(){
  
     Axios
      .post(`/api/getEmployerJobs`, this.state)
      .then( res=>{ 
        console.log(res.data);
       const jobs = res.data;
       this.setState({jobs});
    }
      )
    }
    render(){
        function deleteJob(id){
            Axios.post('/api/deleteJob',{id});
            window.location.reload();
        }
    return ( 
        <div>
         {!isAuth()?<Redirect to='/login'/> :null}
          <Navbar2 />
      <div className = "rq-outer-container" style={{'textAlignLast':"center"}}>
      <div className="data-container rq">
      <h3>Jobs Posted</h3>
      </div>
           {this.state.jobs.map((job) =>{
               return(
                   <div className="request-data curled">
                   <h4>Title: {job.title}</h4>
                   <button onClick={()=>deleteJob(job._id)}>Delete</button>
                   
                   </div>
               )
           })}
           </div>
        </div>
        
     );
}
}