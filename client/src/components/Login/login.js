import React, {useState} from 'react';
import Logo from '../Logo/logo';
//import authSvg from "../assets/auth.svg";
import {ToastContainer, toast} from 'react-toastify';
import {authenticate, isAuth} from "../../helpers/auth";
import axios from 'axios';
import {Link,Redirect} from 'react-router-dom';
import "./main.css";
import "./Signup.css";
import "./google.css";
import 'react-toastify/dist/ReactToastify.css';
import {GoogleLogin} from 'react-google-login';


const Login = ({history}) => {


    const [formData, setFormData] = useState({
        email: '',
        password1: '',
        textChange: 'Sign In'
      });

      const { email, password1, textChange } = formData;
      const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
      };
    
      const sendGoogleToken = tokenId => {
        axios
          .post(`${process.env.REACT_APP_API_URL}/googlelogin`, {
            idToken: tokenId
          })
          .then(res => {
            console.log(res.data);
            informParent(res);

          })
          .catch(error => {
            console.log('GOOGLE SIGNIN ERROR', error.response);
          });
      };
      const informParent = response => {
        authenticate(response, () => {
          isAuth() && isAuth().role === 'admin'
            ? history.push('/admin')
            : history.push('/private');
        });
      };
    
      const responseGoogle = response => {
        console.log(response);
        sendGoogleToken(response.tokenId);
      };
    
    
      const handleSubmit = e => {
        //console.log(process.env.REACT_APP_API_URL);


        e.preventDefault();
        if (email && password1) {
          setFormData({ ...formData, textChange: 'Submitting' });
          axios
            .post(`${process.env.REACT_APP_API_URL}/login`, {
              email,
              password: password1
            })
            .then(res => {
              authenticate(res, () => {
                setFormData({
                  ...formData,
                  email: '',
                  password1: '',
                  textChange: 'Submitted'
                });
                localStorage.setItem('token', res.data.token);
                
                

                //if autheticated but not admin redirect to private
                
                if(isAuth() && isAuth().role === 'admin'){
                  history.push('/admin');
                }

                else if(isAuth() && isAuth().form === false){
                  history.push('/employee');
                }

                else{
                if(isAuth() && isAuth().category === 'employee'){
                  console.log(isAuth() && isAuth().category === 'employee');
                 history.push('/employee');
                

                }
                else if(isAuth() && isAuth().category === 'employer'){
                  history.push('/employer');
                }

              }
                
              });
            })
            .catch(err => {
              setFormData({
                ...formData,
                email: '',
                password1: '',
                textChange: 'Sign In'
              });
              console.log(err.response);
              toast.error(err.response.data.errors);
            });
        } else {
          toast.error('Please fill all fields');
        }
      };


    return ( 

        <div className="Signup">
            <Logo />
            <ToastContainer/>
            <h1>Log In to BYOB</h1>
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
                <div>
                    <input type="password"
                    onChange = {handleChange('password1')} 
                    value={password1}  required />
                    <label>Password</label>
                </div>
                <input type="checkbox" id="Remember me" name="Remember me" value="Remember me" />
                <label for="Remember me"> Remember me</label>
                <br></br>
                <a href="/users/password/forget">Forgot Password ?</a>
                <br></br>
                <input type="submit" value="Login"/>     
            </form>
           
            </div>

            <div className="vertical-row"></div>

            
            <div class="right">
            <GoogleLogin
                  clientId={`${process.env.REACT_APP_GOOGLE_CLIENT}`}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                  render={renderProps => (
                    <button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className='google'
                    ><h6><i className='fab fa-google'></i>  Log in with Google</h6></button>
                  )}
                ></GoogleLogin>
            </div>
        </div>
        </div>
     );
}
 
export default Login;