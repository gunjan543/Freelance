import React,{Component} from 'react';
import Logo from '../Logo/logo';
import '../EmployeeForm/employee.css';
import Axios from 'axios';


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
            postalCode:''
            
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
       
            <Logo />
            <div className="box3">
            <div class="title">  
            
            </div>  
            <div class="form">
            <form onSubmit={this.handleSubmit}>
                <div class="input_field"><label>Organisation Name</label><input type="text" className="input" onChange={this.handleChange('organisationName')}/></div>
                <div class="input_field"><label>Title</label><input type="text" className="input"  onChange={this.handleChange('title')} required/></div>
                <div class="input_field"><label>Description</label><input type="text" className="input"  onChange={this.handleChange('description')} required/></div>
                <div class="input_field"><label>Category</label><input type="text" className="input"  onChange={this.handleChange('category')} required/></div>
                <div class="input_field"><label>Contact Number</label><input type="text" className="input"  onChange={this.handleChange('contactNumber')} required/></div>
                <div class="input_field"><label>Duration</label><input type="text" className="input"  onChange={this.handleChange('duration')} required/></div>
                <div class="input_field"><label>Specialisation</label><input type="text" className="input"  onChange={this.handleChange('specialisation')} required/></div>
                <div class="input_field"><label>Skills</label><input type="text" className="input"  onChange={this.handleChange('skills')} required/></div>
                <div class="input_field"><label>Years Of Experience</label><input type="text" className="input"  onChange={this.handleChange('yearsOfExperience')} required/></div>
                <div class="input_field"><label>Location</label><input type="text" className="input"  onChange={this.handleChange('location')} required/></div>
                <div class="input_field"><label>Postal Code</label><input type="text" className="input"  onChange={this.handleChange('postalCode')} required/></div>
                <button type = "submit">Submit</button>
            </form>
            </div>
            </div>
            </div>
       
     );
}}
 
