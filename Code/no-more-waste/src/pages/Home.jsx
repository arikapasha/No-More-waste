import React from "react";
import "../styles.css";
import "../styles.css";
import search_icon from "../images/search-icon.svg";
import line from "../images/line.png";
import filter from "../images/filter.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext.js";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {setError} from "react"

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/posts");
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  //const posts1 = posts;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const item_key = e.target.id;
   // console.log(item_key)
    try {
       await axios.post("/posts/updatePost", {post_id: item_key});
       //console.log("ive reached here")
      //navigate("/static");
    } catch (err) {
      //setError(err.response.data); //console.log(res)
      console.log(err.response.data)
    }
  };

  // const posts = [
  //   {
  //     post_id: 1,
  //     item_name: "Burger King",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fuga hic repudiandae architecto nesciunt eius laboriosam! Sunt eos aspernatur ex quisquam molestias porro tempore culpa illum nam? Temporibus, minima saepe?      ",
  //     photo_link:
  //       "https://www.seriouseats.com/thmb/Il7mv9ZSDh7n0cZz3t3V-28ImkQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309-french-fries-vicky-wasik-15-5a9844742c2446c7a7be9fbd41b6e27d.jpg",
  //   },
  //   {
  //     post_id: 2,
  //     item_name: "McDonalds",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fuga hic repudiandae architecto nesciunt eius laboriosam! Sunt eos aspernatur ex quisquam molestias porro tempore culpa illum nam? Temporibus, minima saepe?",
  //     photo_link:
  //       "https://www.seriouseats.com/thmb/Il7mv9ZSDh7n0cZz3t3V-28ImkQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309-french-fries-vicky-wasik-15-5a9844742c2446c7a7be9fbd41b6e27d.jpg",
  //   },
  // ];

  return (
    <div>
      {currentUser ? (
        <div class="body-content-home">
          <div class="inner-content">
            <div class="search-and-filter">
              <div class="search">
                <div class="search-div">
                  <img class="search-icon" src={search_icon} alt="" />
                </div>
                <div>
                  <img class="search-underline" src={line} alt="" />
                </div>
                <div>
                  <input
                    class="search-text"
                    type="text"
                    id="textPlaceholder"
                    name="search-text"
                    placeholder="Enter search request..."
                  />
                </div>
              </div>
              <div class="filter">
                <div class="filter-div">
                  <img class="filter-icon" src={filter} alt="" />
                </div>
              </div>
            </div>
            {/* <button class="card-button create-post-btn"><Link to="/createpost">Create a New Post</Link></button> */}
            {currentUser.role === "b" ? (
              <Link to="/createpost">
                <button class="card-button create-post-btn">
                  Create a New Post
                </button>
              </Link>
            ) : (
              <Link></Link>
            )}

            <div class="grid grid--1x2 grid-cards">
              {posts.map((post) => (
                <div class="card" key={post.post_id} value={post.post_id}>
                  
                  <img
                    class="card-image"
                    src={`./uploads/${post.photo_link}`}
                    alt=""
                  />
                  {/* <h3 className="card-heading">{}</h3> */}
                  <h4 class="card-heading" id="item_name" name="item_name">
                    {post.item_name}
                  </h4>
                  <p class="card-text" id="description" name="description">
                    {post.description}
                  </p>
                  {(currentUser.role === "s" && post.shelter_id == null) ? (
                    <Link to="">
                      <button class="card-button" name = {post.post_id} id = {post.post_id} onClick={handleSubmit}>
                        REQUEST
                      </button>
                    </Link>
                  ) : (
                    <p class="card-text">Already Requested</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div class="confirmation landing-block ">
            <div class="confirmation-text-block">
              <p class="confirmation-text bigger-text">
                Welcome to No More Waste
              </p>
              <p class="confirmation-text">
                <Link to="/login">Sign In </Link>
                to your account to proceed or <Link to="/signup">
                  Sign Up
                </Link>{" "}
                today!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
