import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(
        "https://crm-ai.onrender.com/api/v1/users/signup",
        {
          name,
          email,
          password,
        }
      );

      if (response.status === 201) {
        setMessage("Registration successful!");

        navigate("/");
      } else {
        setMessage(response.data.message || "Registration failed.");
      }
    } catch (error) {
      setMessage("An error occurred while registering.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center text-xl my-4">
      <div className="flex justify-center items-center mr-20">
        <img src="heroImage.png" alt="HeroImage" className="" />
      </div>

      <div className="h-full mr-5">
        <div className="text-center">
          <p className="font-semibold text-source-sans-3 text-3xl">
            Sign Up to{" "}
            <span className="font-normal  text-source-serif">Event</span>
            <span className="font-black text-source-serif text-[#669083]">
              Buddy
            </span>
          </p>
          <p className="pb-8">Please fill this form to create an account</p>
        </div>

        <button className="flex justify-center border border-[#7E7E7E] rounded-xl w-[450px] h-[56px] items-center gap-4 mb-3">
          Continue with Google <img src="google.png" alt="GooleLogo" />
        </button>
        <p className="text-center">OR</p>

        <form action="" className="flex flex-col justify-center" onSubmit={handleSubmit}>
          <div className="flex flex-col text-lg">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              className="border border-[#7E7E7E] rounded-xl w-[450px] h-[56px] pl-3"
              value={name}
              onChange={(e) => {setName(e.target.value)}}
              required
            />
          </div>

          <div className="flex flex-col text-lg">
            <label htmlFor="Email">Email Address</label>
            <input
              type="email"
              className="border border-[#7E7E7E] rounded-xl w-[450px] h-[56px] pl-3"
              value={email}
              onChange={(e) => {
                      setEmail(e.target.value);
                    }}
              required
            />
          </div>

          <div className="flex flex-col text-lg relative">
            <label htmlFor="Password">Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              className="border border-[#7E7E7E] rounded-xl w-[450px] h-[56px] opacity-50 pl-3 text-[#1E1E1E] mb-6"
              placeholder="********************"
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
              required
            />
            <FontAwesomeIcon
              icon={passwordVisible ? faEye : faEyeSlash}
              className="absolute right-3 top-[67px] cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          </div>

          <div className="m-auto">
            <button
              className="text-white bg-black w-[170px] h-[56px] rounded-xl text-xl mb-1"
              type="submit"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </div>
        </form>

        <p className="flex justify-center gap-1 text-[#5D5D5D]">
          Already have an account?
          <a href="">
            <span
              className="italic font-semibold text-[#5D5D5D]"
              onClick={() => navigate("/")}
            >
              Login
            </span>
          </a>
        </p>
      </div>
      <p className="text-[#5D5D5D] text-center">{message}</p>
    </div>
  );
}

export default SignUp;
