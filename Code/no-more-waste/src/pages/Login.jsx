import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/noMoreWasteLogo.svg";
import axios from "axios";
import { useState } from "react";

const Login = () => {

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    
  })

  const [err,setError] = useState(null);

  const navigate = useNavigate();

  const handleChange =  e =>{
    setInputs((prev)=>({...prev, [e.target.name]: e.target.value}));
  };
 // console.log(inputs)
 
  const handleSubmit = async (e) =>{
  
  e.preventDefault()
  
  try{
    
    await axios.post("/auth/login", inputs);
    navigate("/");
  }
  catch(err){
setError(err.response.data);    //console.log(res)
  }

} 
  return (
    <div class="body-style">
      <div class="sign-in-logo">
        <img src={Logo} alt="" />
      </div>
      <div class="sign-up sign-in-div">
        <form action="index.html" class="signup-form">
          <h3 class="sign-up-heading">Sign In</h3>
          <label for="email" class="form-label">
            Email Address
          </label>
          <br />
          <input
            type="email"
            id="email-address"
            name="email"
            class="form-input"
            onChange={handleChange}
          />
          <br />
          <label for="password" class="form-label">
            Password
          </label>
          <br />
          <input
            type="password"
            id="pass-word"
            name="password"
            class="form-input"
            onChange={handleChange}
          />
          <br />
          <p class="is-member">
            Not a member?<Link to="/signup">Sign Up Today!</Link>
          </p>
          {/*     <a href="#" class="sign-in">Sign up today!</a> <br />
           */}
          {/*           <p>This is an error!</p>
           */}
          <button onClick={handleSubmit} class="card-button signup-button">Continue</button>
          {err && <p className="error">{err}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
