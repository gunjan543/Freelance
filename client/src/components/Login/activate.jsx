import React, { useState, useEffect } from 'react';
//import authSvg from '../assests/welcome.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { authenticate, isAuth } from '../../helpers/auth';
import { Link, Redirect } from 'react-router-dom';
import Logo from '../Logo/logo';
import welcome from '../images/signin.png';

const Activate = ({ match }) => {
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
    e.preventDefault();

    axios
      .post(`http://localhost:5000/api/activation`, {
        token
      })
      .then(res => {
        setFormData({
          ...formData,
          show: false
        });

        toast.success(res.data.message);
      })
      .catch(err => {
        
        toast.error(err.response.data.errors);
      });
  };

  return (
   
    <div>
       {isAuth() ? <Redirect to='/' /> : null}
            <Logo />
            <ToastContainer />
            <div id="wrapper">
            <div className="lt">
                 <h2>Welcome User</h2>
                 <input type="submit" name="Activate your Account" value="Activate your Account" />
                 <p>Or sign up again</p>
                 <input type="submit" name="Sign Up" value="Sign Up" />
            </div>
            <div className="rt">
            <img className="welcome-img" src={welcome}></img>
            </div>
            </div>
            </div>
  );
};

export default Activate;