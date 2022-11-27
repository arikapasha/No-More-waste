import React from "react";

const CreatePost = () => {
  return (
    <div className="sign-up create-div">
      <form className="signup-form">
        <h3 className="sign-up-heading create-heading">Create a new post</h3>
        <label for="restName" className="form-label">
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
        <label for="description" className="form-label">
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
        <span>
          <div className="upload">
            <p className="upload-btn">+</p>
          </div>
          <p className="upload-instruct">Upload pictures</p>
        </span>

        <button className="card-button create-btn">Create</button>
      </form>
    </div>
  );
};

export default CreatePost;
