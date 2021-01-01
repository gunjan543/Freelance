import React, {useState} from 'react';
import Logo from '../Logo/logo';
import {ToastContainer, toast} from 'react-toastify';

import axios from 'axios';

import "./main.css";
import "./Signup.css";
import "./google.css";
import 'react-toastify/dist/ReactToastify.css';

const Forget = ({history}) => {

    const [formData, setFormData] = useState({
        email: '',
        textChange: 'Submit'
      });
      const { email } = formData;
      const handleChange = text => e => {
        setFormData({ ...formData});
      };
      const handleSubmit = e => {
        e.preventDefault();
        if (email) {
          setFormData({ ...formData });
          axios
            .put(`${process.env.REACT_APP_API_URL}/forgotpassword`, {
              email
            })

            .then(res => {
                console.log("reached here");
                setFormData({
                  ...formData,
                  email: '',
                });
                toast.success(`Please check your email`);
              
            })
            .catch(err => {
               
            console.log(err)
              toast.error(err.response.data.error);
            });
        } else {
          toast.error('Please fill all fields');
        }
      };


    return ( 

        <div className="Signup">
            <Logo />
            <ToastContainer/>
            <h1>Forgot Password?</h1>
            <p>Don't have an account? <a href="/register">Sign Up</a></p>
            
            <div className="wrap">
            <div className="box">
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="email" 
                    onChange = {handleChange('email')} 
                    value={email} 
                    required/>
                    <label>Email</label>
                </div>
            
                <br></br>
                <input type="submit" name="Log In" value="submit" />
            </form>
           
            </div>

            <div className="vertical-row"></div>

            
     
        </div>
        </div>
     );
}
 
export default Forget;