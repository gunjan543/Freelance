import React from 'react';
import Logo from '../Logo/logo';
import "./main.css";
import "./Signup.css";
import "./google.css";

const SignUp = () => {
    return ( 
        <div className="Signup">
            <Logo />
            <h1>Sign Up to BYOB</h1>
            <p>Already have an account? <a href="#">Log In</a></p>
            
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
                <div>
                    <input type="password" required />
                    <label>Confirm Password</label>
                </div>
                <input type="submit" name="Signup" value="submit" />
            </form>
            </div>

            <div className="vertical-row"></div>

            
            <div class="right">
            <a class="btn btn-block btn-social  btn-google google" href="/auth/google" role="button">
            <i class="fab fa-google fa-3x"></i>
            Sign Up with Google
          </a>
            </div>
        </div>
        </div>
     );
}
 
export default SignUp;