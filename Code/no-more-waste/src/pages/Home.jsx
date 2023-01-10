import React from "react";
import search_icon from "../images/search-icon.svg";
import line from "../images/line.png";
import filter from "../images/filter.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext.js";

const Home = () => {

  const { currentUser, logout } = useContext(AuthContext);
  const posts = [
    {
      post_id: 1,
      item_name: "Burger King",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fuga hic repudiandae architecto nesciunt eius laboriosam! Sunt eos aspernatur ex quisquam molestias porro tempore culpa illum nam? Temporibus, minima saepe?      ",
      photo_link:
        "https://www.seriouseats.com/thmb/Il7mv9ZSDh7n0cZz3t3V-28ImkQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309-french-fries-vicky-wasik-15-5a9844742c2446c7a7be9fbd41b6e27d.jpg",
    },
    {
      post_id: 2,
      item_name: "McDonalds",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fuga hic repudiandae architecto nesciunt eius laboriosam! Sunt eos aspernatur ex quisquam molestias porro tempore culpa illum nam? Temporibus, minima saepe?",
      photo_link:
        "https://www.seriouseats.com/thmb/Il7mv9ZSDh7n0cZz3t3V-28ImkQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309-french-fries-vicky-wasik-15-5a9844742c2446c7a7be9fbd41b6e27d.jpg",
    },
  ];

  return (
    <div>
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
      <Link to="/createpost" ><button class="card-button create-post-btn">Create a New Post</button></Link>
      <div class="grid grid--1x2 grid-cards">
        {posts.map((post) => (
          <div class="card" key={post.post_id}>
            <img class="card-image" src={post.photo_link} alt="" />
            <h3 class="card-heading">{post.item_name}</h3>
            <p class="card-text">{post.description}</p>
            <button class="card-button">REQUEST</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
