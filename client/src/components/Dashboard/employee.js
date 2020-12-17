import React from "react";
import Axios from 'axios';

class EmployeeDash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [{}],
      category: "",
      // duration:"",
      // yearsOfExperience:""
    };
  }



  handleChangeCategory = event => {
    this.setState({ category: event.target.value });
  };

  // handleChangeDuration = event => {
  //   this.setState({ duration: event.target.value });
  // };

  // handleChangeYearsOfExperience = event => {
  //   this.setState({ yearsOfExperience: event.target.value });
  //   console.log(state.yearsOfExperience);
  // };

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
    console.log(jobs._id);
    console.log(jobs.employerId);
    let {_id} = JSON.parse(localStorage.getItem('user'));
    console.log(_id);
    Axios.post(`${process.env.REACT_APP_API_URL}/jobApplied`,{jobID: jobs._id, employeeID:_id,employerId:jobs.employerId})
    .then(res =>{
      console.log(res);
    })
  }
  componentDidMount() {
    Axios
        .post(`${process.env.REACT_APP_API_URL}/getJobs`, this.state)
        .then( res=>{ 
         this.state.jobs = res.data;
         console.log(res.data);
         this.setState({ jobs: res.data });
        }
        )
  }

  render() {
    

    const CategoryuniqueJobs = this.getUnique(this.state.jobs, "category");
    // const DurationuniqueJobs = this.getUnique(this.state.jobs, "duration");
    // const YearsOfExperienceuniqueJobs = this.getUnique(this.state.jobs, "yearsOfExperience");
   
    const jobs = this.state.jobs;
    const category = this.state.category;
    // const duration = this.state.duration;
    // const yearsOfExperience = this.state.yearsOfExperience;

    const filterCategoryDropdown = jobs.filter(function(result) {
      return result.category === category;
    });
    // const filterDurationDropdown = jobs.filter(function(result) {
    //   return result.duration === duration;
    // });
    // const filterYearsOfExperienceDropdown = jobs.filter(function(result) {
    //   return result.yearsOfExperience === yearsOfExperience;
    // });

    return (
      <div>
        {/* select category */}

          <label>
            Select Category
            <select
              value={this.state.category}
              onChange={this.handleChangeCategory}
            >
              {CategoryuniqueJobs.map(job => (
                <option key={job._id} value={job.category}>
                  {job.category}
                </option>
              ))}
            </select>
          </label>
          <div>
            {filterCategoryDropdown.map(job => (
              <div key={job._id} style={{ margin: "10px" }}>
                {job.title}
                <button onClick={this.sendRequest(job)}>Apply Now</button>
                <br />
              </div>
            ))}
          </div>

{/* select duration */}

          {/* <label>
            Select Duration
            <select
              value={this.state.duration}
              onChange={this.handleChangeDuration}
            >
              {DurationuniqueJobs.map(job => (
                <option key={job._id} value={job.duration}>
                  {job.duration}
                </option>
              ))}
            </select>
          </label>
          <div>
            {filterDurationDropdown.map(job => (
              <div key={job._id} style={{ margin: "10px" }}>
                {job.title}
                <br />
              </div>
            ))}
          </div> */}

{/* select yearsOfExperience */}
          {/* <label>
            Select Years Of Experience
            <select
              value={this.state.yearsOfExperience}
              onChange={this.handleChangeYearsOfExperience}
            >
              {YearsOfExperienceuniqueJobs.map(job => (
                <option key={job._id} value={job.yearsOfExperience}>
                  {job.yearsOfExperience}
                </option>
              ))}
            </select>
          </label>
          <div>
            {filterYearsOfExperienceDropdown.map(job => (
              <div key={job._id} style={{ margin: "10px" }}>
                {job.title}
                <br />
              </div>
            ))}
          </div> */}
        
      </div>
    );
  }
}

export default EmployeeDash;
