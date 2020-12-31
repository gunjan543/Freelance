import React,{Component} from 'react';
import Logo from '../Logo/logo';
import '../EmployeeForm/employee.css';
import Axios from 'axios';
import {Redirect} from "react-router-dom";
import {isAuth} from "../../helpers/auth"

export default class JobDescription extends Component {
    
    constructor(){
        
        super()
        let {_id, name} = JSON.parse(localStorage.getItem('user'));
        console.log(name);
        this.state = {
            employerId:_id,
            employerName:name,
            organisationName:' ',
            title:'',
            description:'',
            category:'',
            contact:0,
            duration:0,
            specialisation:'',
            skills:'',
            yearsOfExperience:'',
            location:'',
            postalCode:'',
            ctc:''
        };
        
      } 
    handleChange = text => e => {
                
        this.setState({ ...this.state, [text]: e.target.value });
        console.log(e.target.value);
      };
   

    handleSubmit = e => {
        e.preventDefault();
        
        this.setState({...this.state});
        Axios
        .post(`${process.env.REACT_APP_API_URL}/addJob`,
          this.state
           
        )
        .then(res => {
            console.log(res);
            this.props.history.push("/employerDash");
            
        }
        )
        .catch(err => {
            console.log(err);
              
            });   
    };    
        
    render(){
    return (  
        
        <div>
             {!isAuth()?<Redirect to='/login'/> :null}
            <Logo />
            <div className="box3">
            <div class="title">  
            
            </div>  
            <div class="form">
            <form onSubmit={this.handleSubmit}>
                <div class="input_field"><label>Organisation Name</label><input type="text" className="input" onChange={this.handleChange('organisationName')}/></div>
                <div class="input_field"><label>Title</label><input type="text" className="input"  onChange={this.handleChange('title')} required/></div>
                <div class="input_field"><label>Description</label><input type="text" className="input"  onChange={this.handleChange('description')} required/></div>
                <div class="input_field"><label>Category</label>
                <div class="custom_select">
                <select onChange={this.handleChange('category')}>
                <option value="">Select</option>
                <option value="Technical">Technical</option>
                <option value="Non Technical">Non Technical</option>
                </select>
                </div>
                </div>
                <div class="input_field"><label>Contact Number</label><input type="text" className="input"  onChange={this.handleChange('contactNumber')} required/></div>
                <div class="input_field"><label>Duration(in months)</label><input type="text" className="input"  onChange={this.handleChange('duration')} required/></div>
                <div class="input_field"><label>Specialisation</label>
                <div class="custom_select">
                <select onChange={this.handleChange('specialisation')}>
                <option value="">Select</option>
                <option value="Painter">Painter</option>
                <option value="Plumber">Plumber</option>
                <option value="Staff">Staff</option>
                <option value="House Worker/Maid">House Worker/Maid</option>
                <option value="Engineer/Freelancer">Engineer/Freelancer</option>
                <option value="Teacher">Teacher</option>
                </select>
                </div>
                </div>
                <div class="input_field"><label>Skills</label><input type="text" className="input"  onChange={this.handleChange('skills')} required/></div>
                <div class="input_field"><label>Years Of Experience</label><input type="text" className="input"  onChange={this.handleChange('yearsOfExperience')} required/></div>
                <div class="input_field"><label>Package Offered(LPA)</label><input type="text" className="input"  onChange={this.handleChange('ctc')} required/></div>
                <div class="input_field"><label>Location</label><input type="text" className="input"  onChange={this.handleChange('location')} required/></div>
                <div class="input_field"><label>Postal Code</label><input type="text" className="input"  onChange={this.handleChange('postalCode')} required/></div>
                <div class="input_field"><input type="submit" className="btn" value="Submit"/></div>
            </form>
            </div>
            </div>
            </div>
       
     );
}}
 
