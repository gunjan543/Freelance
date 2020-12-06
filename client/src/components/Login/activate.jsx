import React, { useState, useEffect } from 'react';
//import authSvg from '../assests/welcome.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import {  isAuth } from '../../helpers/auth';
import { Redirect } from 'react-router-dom';
import Logo from '../Logo/logo'
import welcome from '../images/welcome.png';

const Activate = ({ match, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    token: '',
    show: true
  });

  useEffect(() => {

    /*get token from params */
    let token = match.params.token;
    let { name } = jwt.decode(token);

    if (token) {
      setFormData({ ...formData, name, token });
    }

    console.log(token, name);
  }, [match.params]);
  const { name, token, show } = formData;

  const handleSubmit = e => {
    let {category} = jwt.decode(token);
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}/activation`, {
        token
      })
      .then(res => {
        setFormData({
          ...formData,
          show: false
        });
     
        toast.success(res.data.message);
        if(category === 'employee'){
         history.push('/employee');

        }
        else{
          history.push('/employer');
        }
      })
      .catch(err => {
        
        toast.error(err.response.data.errors);
      });
  };
  return ( 
    <div>
    {isAuth() ? <Redirect to='/' /> : null}
        <Logo />
        <ToastContainer/>
        <div id="wrapper">
        <div className="lt">
        <form onSubmit={handleSubmit}>
             <h2>Welcome {name}</h2>
             <input type="submit" name="Activate your Account" value="Activate your Account" />
             <p>Or sign up again</p>
             <input type="submit" name="Sign Up" value="Sign Up" />
        </form>
        </div>
        <div className="rt">
        <img className="welcome-img" src={welcome}></img>

        </div>
        </div>
        

        </div>
 );

};

export default Activate;