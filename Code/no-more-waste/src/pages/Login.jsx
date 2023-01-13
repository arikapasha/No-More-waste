import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/noMoreWasteLogo.svg";
//import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/authContext.js";

const Login = () => {

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    
  })

  const [err,setError] = useState(null);

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);
  //console.log(currentUser);

  const handleChange =  e =>{
    setInputs((prev)=>({...prev, [e.target.name]: e.target.value}));
  };
 // console.log(inputs)
 
  const handleSubmit = async (e) =>{
  
  e.preventDefault()
  
  try{
    await login(inputs);
    /* await axios.post("/auth/login", inputs); */
    navigate("/");
  }
  catch(err){
setError(err.response.data);    //console.log(res)
  }

} 
  return (
    <div class="body-style">
      <div class="body-content-login">
        <div class="inner-content-login">
          <div class="login-group">
          <div class="sign-in-logo">
        <img src={Logo} alt="" />
      </div>
      <div class="sign-up sign-in-div">
        <form action="index.html" class="signup-form login-form-width">
          <h3 class="sign-up-heading sign-in-heading">Sign In</h3>
          <label for="email" class="form-label form-label-sign">
            Email Address
          </label>
          <br />
          <input
            type="email"
            id="email-address"
            name="email"
            class="form-input form-input-sign"
            onChange={handleChange}
          />
          <br />
          <label for="password" class="form-label form-label-sign">
            Password
          </label>
          <br />
          <input
            type="password"
            id="pass-word"
            name="password"
            class="form-input form-input-sign"
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
          <button onClick={handleSubmit} class="card-button signup-button sign-in-btn">Continue</button>
          {err && <p className="error">{err}</p>}
        </form>
      </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
