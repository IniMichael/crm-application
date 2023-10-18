import "../LogIn.css";
import testsvg from "../assets/flat.svg";
import picture from "../assets/image 11.png";
import {useNavigate} from "react-router-dom"
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../auth/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await axios.post(
        "https://crm-ai.onrender.com/api/v1/users/login",
        {
          email,
          password,
        }
      );
      console.log(response.data);

      if (response.status === 200) {
        toast.success("Sign in successful!");
        localStorage.setItem("userData", JSON.stringify(response.data));
       
        login(response.data);
        navigate("/UserDashboard");
      } else {
        toast.error(response.data.message || "Sign in failed.");
      }
    } catch (error) {
      toast.error("An error occurred while signing in.");
    } finally {
      setLoading(false);
    }
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
              <form onSubmit={handleSignIn}>
                <div className="input-box">
                  <label>Email Address</label>
                  <input
                    className="input-1"
                    placeholder="Myschoolemail.edu.ng"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                </div>

                <div className="input-box">
                  <label className="label-btn">Password</label>
                  <input
                    className="input-1"
                    type={passwordVisible ? "text" : "password"}
                    placeholder="********************"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  />
                  <FontAwesomeIcon
                    icon={passwordVisible ? faEye : faEyeSlash}
                    className="icons"
                    onClick={togglePasswordVisibility}
                  />
                </div>

                <div class="remember-forgot">
                  <div className="check-rem">
                    <input className="check-box" type="checkbox" />
                    <p className="btn-checkbox">
                      Remember <span>me</span>
                    </p>
                  </div>
                  <div className="forgot-p">
                    <p className="btn-checkbox-forgot">Forgot Password?</p>
                  </div>
                </div>

                <div>
                  <button
                    className="bg-[#1E1E1E] text-white py-[6px] px-[24px] rounded-lg block mx-auto my-[44px]"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>

                  <p className="sign-btn">
                    Don’t have an account?{" "}
                    <a href="" onClick={() => navigate("/SignUp")}>
                      Sign Up
                    </a>
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
