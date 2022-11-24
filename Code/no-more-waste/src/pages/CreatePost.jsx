import React from "react";

const CreatePost = () => {
  return (
    <div class="sign-up create-div">
      <form class="signup-form">
        <h3 class="sign-up-heading create-heading">Create a new post</h3>
        <label for="restName" class="form-label">
          Food Description
        </label>
        <br />
        <input
          type="text"
          id="rest-name"
          name="restName"
          class="form-input create-desc"
          placeholder="Food type, quantity, allergies, etc"
        />
        <br />
        <label for="description" class="form-label">
          Pickup Time
        </label>
        <br />
        <input
          type="text"
          id="desc"
          name="description"
          class="form-input post-pickup"
          placeholder="E.g. 5:00pm"
        />
        <br />
        <span>
          <div class="upload">
            <p class="upload-btn">+</p>
          </div>
          <p class="upload-instruct">Upload pictures</p>
        </span>

        <button class="card-button create-btn">Create</button>
      </form>
    </div>
  );
};

export default CreatePost;
