import React from "react";
import Axios from 'axios';
import Navbar2 from './Navbar2';
import './dashboard.css';
import './styles.css';
import lady from "../images/lady.png";
import {removeCookie, removeLocalStorage} from '../../helpers/auth';


class EmployeeDash extends React.Component {
  constructor(props) {
    super(props);
    let { name } = JSON.parse(localStorage.getItem('user'));
    this.state = {
      jobs: [{}],
      category: "",
      name:name
    };
  }
  handleChangeCategory = event => {
    this.setState({ category: event.target.value });
  };


  getUnique(arr, comp) {
    const unique = arr
      //store the comparison values in array
      .map(e => e[comp])
      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)
      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])
      .map(e => arr[e]);
    return unique;
  }
  sendRequest(jobs){
    
    let {_id} = JSON.parse(localStorage.getItem('user'));

    Axios.post(`$/api/jobApplied`,{jobID: jobs._id, employeeID:_id,employerId:jobs.employerId,jobTitle:jobs.title})
    .then(res =>{
  
    })
  }
  componentDidMount() {
    Axios
        .post(`/api/getJobs`, this.state)
        .then( res=>{ 
         
         
         this.setState({ jobs: res.data });
        }
        )
  }

  render() {
    const {history} = this.props;
    function signout(){
      removeCookie('token');
      removeLocalStorage('user');
      history.push('/');
    }

    const CategoryuniqueJobs = this.getUnique(this.state.jobs, "category");
    const jobs = this.state.jobs;
    const category = this.state.category;
    const filterCategoryDropdown = jobs.filter(function(result) {
      return result.category === category;
    });

    return (
      <div className="employeeDash">
        
         <Navbar2 />
         <button class="logoutBtn" onClick={signout}>
        <svg width="120px" height="50px" viewBox="0 0 180 60" class="border">
        <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
        <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>Logout</span>
        </button>
        <h2>Welcome {this.state.name}</h2>
        <h3>Nice to see you again! :)</h3>
        <h4>Apply to jobs by selecting your area of specialisation</h4>
         <div className="employee">
         <div className="select">
            <select
              value={this.state.category}
              onChange={this.handleChangeCategory}
            >
              <option id="first">Select category</option>
              {CategoryuniqueJobs.map(job => (
                <option key={job._id} value={job.category}>
                  {job.category}
                </option>
              ))}
            </select>
        </div>
        </div>
          <div>
            {filterCategoryDropdown.map(job => (
              <div key={job._id}  className="dropdownEmployee">
                <div className="data-containerss"><h3>Organisation Name : </h3><p>{job.organisationName}</p></div>
                <div className="data-containerss"><h3>Job Title : </h3><p>{job.title}</p></div>                                     
                <div className="data-containerss"><h3>Job Description : </h3><p>{job.description}</p></div>  
                <div className="data-containerss"><h3>Duration : </h3><p>{job.duration} months</p></div>  
                <div className="data-containerss"><h3>Specialisation : </h3><p>{job.specialisation}</p></div>  
                <div className="data-containerss"><h3>Skills : </h3><p>{job.skills}</p></div>  
                <div className="data-containerss"><h3>package offered : </h3><p>{job.ctc}</p></div>  
                <div className="data-containerss"><h3>Location : </h3><p> {job.location}</p></div>  
                <button onClick={this.sendRequest(job)}>Apply Now</button>
                <br />
              </div>
            ))}
          
          </div>  
          <h5>You will soon be hearing from interested employers</h5>
          <img className="empImg" src={lady} alt = ""/>      
      </div>
    );
  }
}

export default EmployeeDash;
