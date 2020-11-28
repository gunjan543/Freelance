import React from 'react';
import Logo from '../Logo/logo';
import "./main.css";
import "./Signup.css";
import "./google.css";

const Login = () => {
    return ( 
        <div className="Signup">
            <Logo />
            <h1>Log In to BYOB</h1>
            <p>Don't have an account? <a href="#">Sign Up</a></p>
            
            <div className="wrap">
            <div className="box">
            <form>
                <div>
                    <input type="email"  required/>
                    <label>Email</label>
                </div>
                <div>
                    <input type="password" required />
                    <label>Password</label>
                </div>
                <input type="checkbox" id="Remember me" name="Remember me" value="Remember me" />
                <label for="Remember me"> Remember me</label>
                <br></br>
                <a href="">Forgot Password ?</a>
                <br></br>
                <input type="submit" name="Log In" value="submit" />
            </form>
           
            </div>

            <div className="vertical-row"></div>

            
            <div class="right">
            <a class="btn btn-block btn-social  btn-google google" href="/auth/google" role="button">
            <i class="fab fa-google fa-3x"></i>
            Login with Google
          </a>
            </div>
        </div>
        </div>
     );
}
 
export default Login;