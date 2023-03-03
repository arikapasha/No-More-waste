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

  //const navigate = useNavigate();

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

  const handleSubmitPickedUp = async (e, post_id, shelterPhoneNumber, item_name) => {
    e.preventDefault();
    const item_key = post_id;
    // console.log(item_key)
    try {
      await axios.post("/posts/pickedUp", { post_id: item_key });
      await axios.post("/posts/send-text-message", {
        phoneNumber: shelterPhoneNumber,
        message: "The volunteer driver has picked up your order for item - "+item_name+ ". The driver will be there shortly.",
      });
      window.location.reload();
    } catch (err) {
      setError(err.response.data);
    }
  };
  const handleSubmitDelivered = async (e, post_id, restaurantPhoneNumber, item_name) => {
    e.preventDefault();
    const item_key = post_id;
    // console.log(item_key)
    try {
      await axios.post("/posts/delivered", { post_id: item_key });
      await axios.post("/posts/send-text-message", {
        phoneNumber: restaurantPhoneNumber,
        message: "Your item "+item_name+ " has been delivered. Thank you for supporting our cause to reduce food waste. See you again!",
      });
      window.location.reload();
    } catch (err) {
      setError(err.response.data);
    }
  };
  

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li class="nav__item" key={post.post_id} value={post.post_id}>
            <h3>{post.item_name}</h3>
            <p>{post.description}</p>
            {currentUser &&
            currentUser.role === "b" &&
            post.shelter_id != null ? (
              //<Link to="/track">
              <p>
                <p>
                  Restaurant: {post.restaurantName}, {post.restaurantAddress},
                  {post.restaurantPhoneNumber}
                </p>
                <p>
                  Shelter: {post.shelterName}, {post.shelterAddress},
                  {post.shelterPhoneNumber}
                </p>
              </p>
            ) : (
              //</Link>
              <Link></Link>
            )}
            {currentUser &&
            currentUser.role === "b" &&
            post.shelter_id === null ? (
              //<Link to="/track">
              <p>
                <p>
                  Restaurant: {post.restaurantName}, {post.restaurantAddress},
                  {post.restaurantPhoneNumber}
                </p>
                <p style={{color: "red"}}>
                  Shelter: No shelter has accepted this delivery yet.
                </p>
              </p>
            ) : (
              //</Link>
              <Link></Link>
            )}
            {currentUser &&
            currentUser.role === "s" ? (
              //<Link to="/track">
              <p>
                <p>
                  Restaurant: {post.restaurantName}, {post.restaurantAddress},
                  {post.restaurantPhoneNumber}
                </p>
                <p>
                  Shelter: {post.shelterName}, {post.shelterAddress},
                  {post.shelterPhoneNumber}
                </p>
              </p>
            ) : (
              //</Link>
              <Link></Link>
            )}
            {currentUser &&
            currentUser.role === "v" ? (
              //<Link to="/track">
              <p>
                <p>
                  Restaurant: {post.restaurantName}, {post.restaurantAddress},
                  {post.restaurantPhoneNumber}
                </p>
                <p>
                  Shelter: {post.shelterName}, {post.shelterAddress},
                  {post.shelterPhoneNumber}
                </p>
              </p>
            ) : (
              //</Link>
              <Link></Link>
            )}
            {currentUser && currentUser.role === "b" ? (
              //<Link to="/track">
              <button
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
                name={post.post_id}
                id={post.post_id}
                onClick={(e) => handleSubmitPickedUp(e, post.post_id, post.shelterPhoneNumber, post.item_name)}
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
            post.accepted === 1 && post.completed == null ? (
              //<Link to="/track">
              <button
                name={post.post_id}
                id={post.post_id}
                onClick={(e) => handleSubmitDelivered(e, post.post_id, post.restaurantPhoneNumber, post.item_name)}
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
            post.accepted === 1 && post.completed === 1 ? (
              //<Link to="/track">
              <p style={{color: "green"}}>This delivery is complete.</p>
            ) : (
              //</Link>
              <Link></Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Track;
