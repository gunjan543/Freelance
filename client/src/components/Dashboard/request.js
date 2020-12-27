import React, { Component } from 'react';
import Axios from 'axios';

export default class Requests extends Component{
    constructor(props){
        super(); 
        this.state={
            users:[]
        }
        }
        componentDidMount(){
            let {_id} = JSON.parse(localStorage.getItem('user'));
            Axios
            .post(`${process.env.REACT_APP_API_URL}/getApplicants`, {_id})
            .then( res=>{ 
             const users = res.data;
             this.setState({users});
             console.log(this.state.users);
            }
            )
          }
         
    render(){  


        return(

          <h1> hello</h1>
        )
    }
 
}