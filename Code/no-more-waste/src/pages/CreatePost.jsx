import React from "react";
import "../styles.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [item_name, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [pickup_time, setPickup] = useState("");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(
        process.env.REACT_APP_BASE_URL + "/upload",
        formData
      );
      //console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      await axios.post(process.env.REACT_APP_BASE_URL + "/posts", {
        item_name,
        description,
        photo_link: imgUrl,
        pickup_time,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div class="body-content-create">
        <div class="inner-content-create">
          <div className="sign-up create-div">
            <form className="signup-form">
              <div class="card-head-design create-header">
                <h4 class="card-heading" id="item_name" name="item_name">
                  Create a new post
                </h4>
              </div>
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

              <textarea
                id="description"
                name="description"
                className="form-input create-desc"
                placeholder="Food type, quantity, allergies, etc"
                maxlength="100"
                minlength="50"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <br />
              <label for="description" className="form-label form-label-create">
                Pickup Time
              </label>
              <br />
              <input
                type="datetime-local"
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
