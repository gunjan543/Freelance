import React, { Component } from 'react';
import '../Header/header.css';
import Navbars from './Navbar';
import './dashboard.css';
import Axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default class EmployeeDash extends Component  {
 
    constructor(props){
      super();
      this.state = {
        jobs:[],
        selectValue:''
      }
      }
     
      componentDidMount(){
        Axios
        .post(`${process.env.REACT_APP_API_URL}/getJobs`, this.state)
        .then( res=>{ 
         const jobs = res.data;
         this.setState({jobs});
        }
        )
      }
      sendRequest(jobs){
        console.log(jobs._id);
        console.log(jobs.employerId);
        let {_id} = JSON.parse(localStorage.getItem('user'));
        console.log(_id);
        Axios.post(`${process.env.REACT_APP_API_URL}/jobApplied`,{jobID: jobs._id, employeeID:_id,employerId:jobs.employerId})
        .then(res =>{
          console.log(res);
        })
      }
      displayJob(jobs){
        return(
          jobs.length === 0 ?
          <h1>No Work right Now</h1>:
          this.state.jobs.map((jobs)=>{
          
          <h1>No work right now!</h1>
          return <div>
          <h1 id = "username">{jobs.title}</h1>
          <button type="submit" onClick = {()=>{this.sendRequest(jobs)}}>Apply Now</button>
          </div>
        })
      )}
      onSearch = (e) => {
        this.setState({selectValue:e.target.value});
      }
render (){ 
 
  var message='You selected '+this.state.selectValue;
  const filteredItems = this.state.jobs.filter((item) => item.category.includes(this.state.selectValue));
 console.log(filteredItems);
return(
  <div>
  <div className="dash"> 
  <Navbars />
  </div>
  <select 
        value={this.state.selectValue} 
        onChange={this.onSearch} 
      >
       <option value="">All</option>
        <option value="Painter">Painter</option>
        <option value="Teacher">Teacher</option>
        <option value="Developer">Developer</option>
      </select>
  <div>{ this.displayJob(filteredItems)}</div>
  
  </div>
      );}
      }

