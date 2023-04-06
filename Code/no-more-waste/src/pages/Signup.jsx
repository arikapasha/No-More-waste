import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../images/noMoreWasteLogo.svg";
import axios from "axios";



const Signup = () => {
  const [checkedBus, setCheckedBus] = useState(false);
  const [checkedShelter, setCheckedShelter] = useState(false);
  const [checkedVolunteer, setCheckedVolunteer] = useState(false);

  const [inputs, setInputs] = useState({
    businessname: "",
    address: "",
    username: "",
    phone_number: "",
    role: "",
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // console.log(inputs)

  const handleBus = (e) => {
    setCheckedBus(!checkedBus);
  };
  //console.log(checkedBus);

  const handleShelter = (e) => {
    setCheckedShelter(!checkedShelter);
  };

  const handleVolunteer = (e) => {
    setCheckedVolunteer(!checkedVolunteer);
  };

  if (checkedBus) {
    inputs.role = "b";
  } else if (checkedShelter) {
    inputs.role = "s";
  } else if (checkedVolunteer) {
    inputs.role = "v";
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(process.env.REACT_APP_BASE_URL + "/auth/signup", inputs);
      navigate("/login");
      console.log(res);
    } catch (err) {
      setError(err.response.data); //console.log(res)
    }
  };
  return (
    <div class="body-style">
      <div class="body-content-login">
        <div class="inner-content-login">
          <div class="login-group">
            <div class="sign-up-logo">
              <img src={Logo} alt="" />
            </div>
            <div class="sign-up">
              <form class="signup-form">
                <h3 class="sign-up-heading">Sign Up!</h3>
                <label for="business" class="form-label">
                  Business Name
                </label>
                <br />
                <input
                  type="text"
                  id="business-name"
                  name="businessname"
                  class="form-input"
                  onChange={handleChange}
                />
                <br />
                <label for="address" class="form-label">
                  Address Line
                </label>
                <br />
                <input
                  type="text"
                  id="address-line"
                  name="address"
                  class="form-input"
                  onChange={handleChange}
                />
                <br />
                {/* <label for="postal-code" class="form-label">
                  Postal Code
                </label>
                <br />
                <input
                  type="text"
                  id="postal-code"
                  name="postal-code"
                  class="form-input"
                  onChange={handleChange}
                />
                <br /> */}
                <label for="username" class="form-label">
                  First and Last name
                </label>
                <br />
                <input
                  type="text"
                  id="contact-name"
                  name="username"
                  class="form-input"
                  onChange={handleChange}
                />
                <br />
                <label for="number" class="form-label">
                  Phone Number
                </label>
                <br />
                <input
                  type="tel"
                  name="phone_number"
                  id="phone-number"
                  class="form-input"
                  onChange={handleChange}
                />
                <br />

                <input
                  required
                  type="checkbox"
                  id="business-option"
                  name="businessOption"
                  value={checkedBus}
                  onChange={handleBus}
                  class="check-input"
                />

                <label for="isBusiness" class="form-label">
                  Restaurant
                </label>

                <input
                  required
                  type="checkbox"
                  id="shelter-option"
                  name="shelterOption"
                  value={checkedShelter}
                  onChange={handleShelter}
                  class="check-input"
                />
                <label for="isShelter" class="form-label">
                  Shelter
                </label>

                <input
                  required
                  type="checkbox"
                  id="volunteer-option"
                  name="volunteerOption"
                  value={checkedVolunteer}
                  onChange={handleVolunteer}
                  class="check-input"
                />

                <label for="isVolunteer" class="form-label">
                  Volunteer
                </label>

                <br />
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
                  Already a member? <Link to="/login">Sign In</Link>
                </p>
                {/*     <a href="#" class="sign-in">Sign in</a> <br />
                 */}
                <button
                  onClick={handleSubmit}
                  class="card-button signup-button"
                >
                  Continue
                </button>
                {err && <span className="error">{err}</span>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
