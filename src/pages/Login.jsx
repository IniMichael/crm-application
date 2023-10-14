import '../LogIn.css'
import testsvg from "../assets/flat.svg";
import picture from "../assets/image 11.png";
import { Link, useHistory } from 'react-router-dom';
import {React, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';

function Login() {
  
  const history = useHistory();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="picture">
          <img className="picture-btn" src={picture}></img>
        </div>
        <div className="container-1">
          <p className="first-content">
            Welcome Back<span className="btn-event"> Event</span>
            <span className="btn-buddy">Buddy</span>
          </p>
          <p className="btn">Welcome back! Please enter your details.</p>

          <div className="login">
            <button className="login-button">
              <p className="button-p">Continue with Google</p>
              <img src={testsvg}></img>
            </button>

            <p className="btn-or">OR</p>

            <div>
              <form>
                <div className="input-box">
                  <label>Email Address</label>
                  <input className='input-1'
                    type="email"
                    placeholder="Myschoolemail.edu.ng"
                  ></input>
                </div>

                <div className="input-box">
                  <label className="label-btn">Password</label>
                  <input className='input-1'
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="********************"
                  />
                  <FontAwesomeIcon
                  icon={passwordVisible ? faEye : faEyeSlash}
                  className='icons'
                  onClick={togglePasswordVisibility}
                  />
                </div>

                <div class="remember-forgot">
                  <div className='check-rem'>
                  <input className="check-box" type="checkbox"></input>
                  <p className="btn-checkbox">
                    Remember <span>me</span>
                  </p>
                  </div>
                  <div className='forgot-p'>
                  <p className="btn-checkbox-forgot">
                    Forgot Password?
                  </p>
                  </div>
                </div>

                <div>
                <Link to="/UserDashboard">
                  <button className="sign-btn-button">
                      Sign In
                  </button>
                    </Link>
                  
                  <p className="sign-btn">
                    Don’t have an account? <a href="" onClick={() => history.push('/')}>Sign Up</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Login;
