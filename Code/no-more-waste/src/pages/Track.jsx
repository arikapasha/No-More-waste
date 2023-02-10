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

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li class="nav__item" key={post.post_id} value={post.post_id}>
            <h3>{post.item_name}</h3>
            <p>{post.description}</p>
            {currentUser && currentUser.role === "b" ? (
              <Link to="/track">
                <button
                  name={post.post_id}
                  id={post.post_id}
                  onClick={handleSubmit}
                >
                  Delete Post
                </button>
              </Link>
            ) : (
              <Link></Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Track;
