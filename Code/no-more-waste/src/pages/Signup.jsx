import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div class="sign-up">
  <form  class="signup-form">
    <h3 class="sign-up-heading">Sign Up!</h3>
    <label for="business" class="form-label">Business Name</label><br />
    <input
      type="text"
      id="business-name"
      name="businessName"
      class="form-input"
    /><br />
    <label for="address" class="form-label">Address Line</label><br />
    <input
      type="text"
      id="address-line"
      name="address"
      class="form-input"
    /><br />
    <label for="names" class="form-label">First and Last name</label><br />
    <input
      type="text"
      name="contactName"
      id="contact-name"
      class="form-input"
    /><br />
    <label for="number" class="form-label">Phone Number</label><br />
    <input
      type="tel"
      name="phoneNumber"
      id="phone-number"
      class="form-input"
    /><br />

    <input
      type="checkbox"
      id="business-option"
      name="businessOption"
      value="Business"
      class="form-input"
    />
    <label for="isBusiness" class="form-label">Business</label>
{/*     <!-- <p class="or-in-form">or</p> -->
 */}    <input
      type="checkbox"
      id="shelter-option"
      name="shelterOption"
      value="Shelter"
      class="form-input"
    />
    <label for="isShelter" class="form-label">Shelter</label><br />
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
    <p class="is-member">Already a member? <Link to= "/login">Sign In</Link></p>
{/*     <a href="#" class="sign-in">Sign in</a> <br />
 */}    
    
    <button class="card-button signup-button">Continue</button>
  </form>
</div>
  )
}

export default Signup