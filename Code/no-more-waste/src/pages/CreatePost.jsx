import React from "react";
import "../styles.css";
import search_icon from "../images/search-icon.svg";
import line from "../images/line.png";
import filter from "../images/filter.png";
import logo from "../images/noMoreWasteLogo.svg";
import fb from "../images/fb.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import copyright from "../images/copyright.png";

const CreatePost = () => {
  return (
    <div>
      <div className="sign-up create-div">
        <form className="signup-form">
          <h3 className="sign-up-heading create-heading">Create a new post</h3>
          <label for="restName" className="form-label form-label-create">
            Food Description
          </label>
          <br />
          <input
            type="text"
            id="rest-name"
            name="restName"
            className="form-input create-desc"
            placeholder="Food type, quantity, allergies, etc"
          />
          <br />
          <label for="description" className="form-label form-label-create">
            Pickup Time
          </label>
          <br />
          <input
            type="text"
            id="desc"
            name="description"
            className="form-input post-pickup"
            placeholder="E.g. 5:00pm"
          />
          <br />
          <span class="create-span">
            <div className="upload">
              <p className="upload-btn">+</p>
            </div>
            <p className="upload-instruct">Upload pictures</p>
          </span>

          <button className="card-button create-btn">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
