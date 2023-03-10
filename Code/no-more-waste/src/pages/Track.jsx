import React from "react";
import { AuthContext } from "../context/authContext.js";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { setError } from "react";
import { useNavigate } from "react-router-dom";

const Track = () => {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let endpoint = " ";
    const fetchData = async () => {
      if (currentUser.role === "b") {
        endpoint = "/posts/restPosts";
      } else if (currentUser.role === "s") {
        endpoint = "/posts/shelterPosts";
      } else {
        endpoint = "/posts/volunteerPosts";
      }
      try {
        const res = await axios.get(endpoint);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const item_key = e.target.id;
    // console.log(item_key)
    try {
      await axios.post("/posts/deletePost", { post_id: item_key });
      window.location.reload();
    } catch (err) {
      setError(err.response.data);
    }
  };

  const handleSubmitPickedUp = async (
    e,
    post_id,
    shelterPhoneNumber,
    item_name
  ) => {
    e.preventDefault();
    const item_key = post_id;
    // console.log(item_key)
    try {
      await axios.post("/posts/pickedUp", { post_id: item_key });
      await axios.post("/posts/send-text-message", {
        phoneNumber: shelterPhoneNumber,
        message:
          "The volunteer driver has picked up your order for item - " +
          item_name +
          ". The driver will be there shortly.",
      });
      window.location.reload();
    } catch (err) {
      setError(err.response.data);
    }
  };
  const handleSubmitDelivered = async (
    e,
    post_id,
    restaurantPhoneNumber,
    item_name
  ) => {
    e.preventDefault();
    const item_key = post_id;
    // console.log(item_key)
    try {
      await axios.post("/posts/delivered", { post_id: item_key });
      await axios.post("/posts/send-text-message", {
        phoneNumber: restaurantPhoneNumber,
        message:
          "Your item " +
          item_name +
          " has been delivered. Thank you for supporting our cause to reduce food waste. See you again!",
      });
      window.location.reload();
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div>
      <ul>
        <div class="body-content-home">
          <div class="inner-content-track">
          <div class="grid grid--1x3 grid--1x2 grid-cards">
          {currentUser && posts.length === 0 ? (
            <p>You have no posts.</p>
          ) : (
            posts.map((post) => (
              <div class="card card-track">
                <li class="nav__item" key={post.post_id} value={post.post_id}>
                <div class="card-head-div">
                    <div class="card-head-design">
                    <h4 class="card-heading" id="item_name" name="item_name">
                    {post.item_name}
                    </h4>
                    </div>
                  </div>
                  <div class="card-head-div">
                  <p class="card-text" id="description" name="description">
                    {post.description}
                  </p>
                  </div>
                  {currentUser &&
                  currentUser.role === "b" &&
                  post.shelter_id !== null ? (
                    //<Link to="/track">
                    <div>
                  <div class="rest-track-details">
                  <div class="restaurant-banner">
                    <p class="card-restaurant">Restaurant</p>
                  </div>
                  <div class="rest-details">
                  <p class="card-text rest-shelt-text" id="description" name="description">
                  {post.restaurantName } <br/>
                  {post.restaurantAddress} <br/>
                  {post.restaurantPhoneNumber}
                </p>
                  </div>
                  </div>

                  <div class="shelter-region shelt-track-details">
                    <div class="shelter-banner">
                  <p class="card-shelter">Shelter</p>
                </div>
                <div class="shelter-details">
                <p class="card-text text-shelt-details" id="description" name="description">
                  {post.shelterName } <br/>
                  {post.shelterAddress} <br/>
                  {post.shelterPhoneNumber}
                </p>
                  </div>
                </div>
                    </div>
                  ) : (
                    //</Link>
                    <Link></Link>
                  )}
                  {currentUser &&
                  currentUser.role === "b" &&
                  post.shelter_id === null ? (
                    //<Link to="/track">
                    <div>
                      <div class="disp">
                        <div class="item-desc-rest">
                          <p class="disc-p">Restaurant:</p>
                        </div>
                        <p class="disc-content">
                          {post.restaurantName}, {post.restaurantAddress},{" "}
                          {post.restaurantPhoneNumber}
                        </p>
                      </div>

                      <div class="disp">
                        <div class="item-desc-shelt">
                          <p class="disc-p">Shelter:</p>
                        </div>
                        <p class="disc-content-error disc-content">
                          No shelter has accepted this delivery yet.
                        </p>
                      </div>
                    </div>
                  ) : (
                    //</Link>
                    <Link></Link>
                  )}
                  {currentUser && currentUser.role === "s" ? (
                    //<Link to="/track">
                    <div>
                      <div class="disp">
                        <div class="item-desc-rest">
                          <p class="disc-p">Restaurant:</p>
                        </div>
                        <p class="disc-content">
                          {post.restaurantName}, {post.restaurantAddress},{" "}
                          {post.restaurantPhoneNumber}
                        </p>
                      </div>

                      <div class="disp">
                        <div class="item-desc-shelt">
                          <p class="disc-p">Shelter:</p>
                        </div>
                        <p class="disc-content">
                          {post.shelterName}, {post.shelterAddress},{" "}
                          {post.shelterPhoneNumber}
                        </p>
                      </div>
                    </div>
                  ) : (
                    //</Link>
                    <Link></Link>
                  )}
                  {currentUser &&
                  (currentUser.role === "b" || currentUser.role === "s") &&
                  post.driver_id !== null ? (
                    //<Link to="/track">
                    <div>
                      <div class="driver-track-details">
                    <div class="shelter-banner">
                  <p class="card-shelter">Driver</p>
                </div>
                <div class="shelter-details">
                <p class="card-text text-shelt-details" id="description" name="description">
                  {post.driverUsername } <br/>
                  {post.driverPhoneNumber} 
                </p>
                  </div>
                </div>
                    </div>
                  ) : (
                    //</Link>
                    <Link></Link>
                  )}
                  {currentUser &&
                  (currentUser.role === "b" || currentUser.role === "s") &&
                  post.driver_id === null ? (
                    //<Link to="/track">
                    <div>
                      <div class="driver-track-details">
                    <div class="shelter-banner">
                  <p class="card-shelter">Driver</p>
                </div>
                <div class="shelter-details">
                <p class="card-text text-shelt-details" id="description" name="description">
                  None
                </p>
                  </div>
                </div>
                    </div>
                  ) : (
                    //</Link>
                    <Link></Link>
                  )}
                  {currentUser && currentUser.role === "v" ? (
                    //<Link to="/track">
                    <div>
                      <div class="disp">
                        <div class="item-desc-rest">
                          <p class="disc-p">Restaurant:</p>
                        </div>
                        <p class="disc-content">
                          {post.restaurantName}, {post.restaurantAddress},{" "}
                          {post.restaurantPhoneNumber}
                        </p>
                      </div>

                      <div class="disp">
                        <div class="item-desc-shelt">
                          <p class="disc-p">Shelter:</p>
                        </div>
                        <p class="disc-content">
                          {post.shelterName}, {post.shelterAddress},{" "}
                          {post.shelterPhoneNumber}
                        </p>
                      </div>
                    </div>
                  ) : (
                    //</Link>
                    <Link></Link>
                  )}
                  {currentUser && currentUser.role === "b" ? (
                    //<Link to="/track">
                    <button
                      class="card-button card-btn-track"
                      name={post.post_id}
                      id={post.post_id}
                      onClick={handleSubmit}
                    >
                      Delete Post
                    </button>
                  ) : (
                    //</Link>
                    <Link></Link>
                  )}
                  {currentUser &&
                  currentUser.role === "v" &&
                  post.accepted === 1 &&
                  post.pickedUp === null ? (
                    //<Link to="/track">
                    <button
                      class="track-btn"
                      name={post.post_id}
                      id={post.post_id}
                      onClick={(e) =>
                        handleSubmitPickedUp(
                          e,
                          post.post_id,
                          post.shelterPhoneNumber,
                          post.item_name
                        )
                      }
                    >
                      Picked Up
                    </button>
                  ) : (
                    //</Link>
                    <Link></Link>
                  )}
                  {currentUser &&
                  currentUser.role === "v" &&
                  post.pickedUp === 1 &&
                  post.accepted === 1 &&
                  post.completed == null ? (
                    //<Link to="/track">
                    <button
                      class="track-btn"
                      name={post.post_id}
                      id={post.post_id}
                      onClick={(e) =>
                        handleSubmitDelivered(
                          e,
                          post.post_id,
                          post.restaurantPhoneNumber,
                          post.item_name
                        )
                      }
                    >
                      Delivered
                    </button>
                  ) : (
                    //</Link>
                    <Link></Link>
                  )}
                  {currentUser &&
                  currentUser.role === "v" &&
                  post.pickedUp === 1 &&
                  post.accepted === 1 &&
                  post.completed === 1 ? (
                    //<Link to="/track">
                    <p style={{ color: "green" }}>This delivery is complete.</p>
                  ) : (
                    //</Link>
                    <Link></Link>
                  )}
                </li>
              </div>
            ))
          )}
        </div>
          </div>
        
        </div>
        
      </ul>
    </div>
  );
};

export default Track;
