import React from "react";
import "../styles.css";
import { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [item_name, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [pickup_time, setPickup] = useState("");
  const [file, setFile] = useState(null);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try{
      await axios.post("/posts",{
        item_name,
        description,
        photo_link : imgUrl,
        pickup_time,
      });
    } catch(err){
      console.log(err);
    }
  };
  return (
    <div>
      <div class="body-content-create">
        <div class="inner-content-create">
          <div className="sign-up create-div">
            <form className="signup-form">
              <h3 className="sign-up-heading create-heading">
                Create a new post
              </h3>
              <label for="item_name" className="form-label form-label-create">
                Item Name
              </label>
              <br />
              <input
                type="text"
                id="item_name"
                name="item_name"
                className="form-input post-pickup"
                placeholder="Fries"
                onChange={(e) => setItemName(e.target.value)}
              />
              <br />
              <label for="restName" className="form-label form-label-create">
                Food Description
              </label>
              <br />
              <input
                type="text"
                id="description"
                name="description"
                className="form-input create-desc"
                placeholder="Food type, quantity, allergies, etc"
                onChange={(e) => setDescription(e.target.value)}
              />
              <br />
              <label for="description" className="form-label form-label-create">
                Pickup Time
              </label>
              <br />
              <input
                type="text"
                id="description"
                name="description"
                className="form-input post-pickup"
                placeholder="E.g. 5:00pm"
                onChange={(e) => setPickup(e.target.value)}
              />
              <br />
              <input
                type="file"
                id="file"
                name=""
                onChange={(e) => setFile(e.target.files[0])}
              />
              {/* <span class="create-span">
                <div className="upload">
                  <p className="upload-btn">+</p>
                </div>
                <p className="upload-instruct">Upload pictures</p>
              </span> */}

              <button className="card-button create-btn" onClick={handleSubmit}>
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
