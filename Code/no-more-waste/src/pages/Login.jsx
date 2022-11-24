import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    
<div class="sign-up sign-in-div">
  <form action="index.html" class="signup-form">
    <h3 class="sign-up-heading">Sign In</h3>
    <label for="email" class="form-label">Email Address</label><br />
    <input
      type="email"
      id="email-address"
      name="email"
      class="form-input"
    /><br />
    <label for="password" class="form-label">Password</label><br />
    <input
      type="password"
      id="pass-word"
      name="password"
      class="form-input"
    /><br />
    <p class="is-member">Not a member?<Link to= "/signup">Sign Up Today!</Link></p>
{/*     <a href="#" class="sign-in">Sign up today!</a> <br />
 */}    
    <p>This is an error!</p>
    <button class="card-button signup-button">Continue</button>
  </form>
</div>

  )
}

export default Login