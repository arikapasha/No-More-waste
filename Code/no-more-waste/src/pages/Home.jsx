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
import { setError } from "react";
import MapLink from "../components/MapLink";

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

  const handleSubmit = async (e, busName, post_id,  busPhoneNumber, item_name) => {
    // this is for request button for shelter
    e.preventDefault();
    const item_key = post_id;
    //const busPhoneNumber = e.target.

    // console.log(item_key)
    try {
      await axios.post("/posts/updatePost", { post_id: item_key });
      await axios.post("/posts/send-text-message", {
        phoneNumber: busPhoneNumber,
        message: "Hi " + busName + "\nA shelter has requested the item - "+ item_name+ " for donation.\nWe will update you when a volunteer driver has accepted the delivery.\nThank you for your generosity!"
      });
      navigate("/track");
    } catch (err) {
      setError(err.response.data);
    }
  };

  const handleSubmitVolunteer = async (e, post_id, busPhoneNumber, shelterPhoneNumber, item_name) => {
    e.preventDefault();
    const item_key = post_id;
    // console.log(item_key)
    try {
      await axios.post("/posts/updateVolunteer", { post_id: item_key });
      //console.log("ive reached here")
      await axios.post("/posts/send-text-message", {
        phoneNumber: busPhoneNumber,
        message: "A volunteer delivery driver has accepted the delivery for item - "+item_name+ ". The driver will be there shortly.",
      });
      await axios.post("/posts/send-text-message", {
        phoneNumber: shelterPhoneNumber,
        message: "A volunteer delivery driver has accepted the delivery for item - "+item_name+ ". The driver will pick up the food shortly. We will notify you when the driver is on their way to you with your food.",
      });
      navigate("/track");
    } catch (err) {
      //setError(err.response.data); //console.log(res)
      setError(err.response.data);
    }
  };

  return (
    <div>
      {currentUser ? (
        <div class="body-content-home">
          <div class="inner-content">
            {/* <div class="search-and-filter">
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
                  <button class="card-button">Search</button>
                </div>
              </div>
              <div class="filter">
                <div class="filter-div">
                  <img class="filter-icon" src={filter} alt="" />
                </div>
              </div>
            </div> */}

            {currentUser.role === "b" ? (
              <Link to="/createpost">
                <button class="card-button create-post-btn"> 
                  Create a New Post
                </button>
              </Link>
            ) : (
              <Link></Link>
            )}

            <div class="grid grid--1x3 grid--1x2 grid-cards">
              {posts.map((post) => (
                <div class="card" key={post.post_id} value={post.post_id}>
                  <img
                    class="card-image"
                    src={`./uploads/${post.photo_link}`}
                    alt=""
                  />
                  {/* <h3 className="card-heading">{}</h3> */}
                  <div class="card-head-div">
                    <div class="card-head-design">
                    <h4 class="card-heading" id="item_name" name="item_name">
                    {post.item_name}
                    </h4>
                    </div>
                  </div>
                  <div class="card-head-div">
                  <p class="card-text card-desc" id="description" name="description">
                    {post.description}
                  </p>
                  </div>
                  <div>
                  <div class="restaurant-banner">
                    <p class="card-restaurant">Restaurant</p>
                  </div>
                  <div class="rest-details">
                  <p class="card-text rest-shelt-text" id="description" name="description">
                  {post.restaurantName } <br/>
                  {/* {post.restaurantAddress} */}
                  <MapLink class ="map-link" address={post.restaurantAddress}/>
                </p>
                  </div>
                  </div>
                  
                  {post.shelter_id === null ?
                  <div>
                  <div class="shelter-region">
                    <div class="shelter-banner">
                      <p class="card-shelter">Shelter</p>
                    </div>
                    <div class="shelter-details">
                      <p class="card-text shelt-no-req" id="description" name="description" style={{color: "green"}}>
                        No request
                      </p>
                    </div>
                  </div>
                </div>
                  : <div>
                    <div class="shelter-region"><div class="shelter-banner">
                  <p class="card-shelter">Shelter</p>
                </div>
                <div class="shelter-details">
                <p class="card-text text-shelt-details" id="description" name="description">
                  {post.shelterName } <br/>
                  {/* {post.shelterAddress} */}
                  <MapLink address={post.shelterAddress}/>
                </p>
                  </div>
                </div>
                  </div>
                }
                  {currentUser.role === "s" && post.shelter_id === null ? (
                    <Link to="">
                      <button
                        class="card-button"
                        name={post.post_id}
                        id={post.post_id}
                        onClick={(e) =>
                          handleSubmit(
                            e,
                            post.restaurantName,
                            post.post_id,
                            post.restaurantPhoneNumber,
                            post.item_name
                          )
                        }
                      >
                        REQUEST
                      </button>
                    </Link>
                  ) : (
                    <Link></Link>
                  )}
                  {currentUser.role === "v" &&
                  post.driver_id === null &&
                  post.shelter_id !== null ? (
                    <Link to="">
                      {/* <p class="card-text" id="description" name="description">
                        Restaurant: {post.restaurantName}
                        </p>
                        <p class="card-text" id="description" name="description"> 
                        Restaurant Address: {post.restaurantAddress}
                        </p>
                        <p class="card-text" id="description" name="description">
                        Shelter: {post.shelterName}
                        </p>
                        <p class="card-text" id="description" name="description">
                        Shelter Address: {post.shelterAddress}
                      </p> */}
                      <button
                        class="card-button"
                        name={post.post_id}
                        id={post.post_id}
                        onClick={(e) =>
                          handleSubmitVolunteer(
                            e,
                            post.post_id,
                            post.restaurantPhoneNumber,
                            post.shelterPhoneNumber,
                            post.item_name
                          )
                        }
                      >
                        ACCEPT
                      </button>
                    </Link>
                  ) : (
                    <Link></Link>
                  )}
                  {currentUser.role === "s" && post.shelter_id != null ? (
                    <div>
                      <div class="already-req-banner">
                      <p class="card-text already-requested">Already requested</p>
                      </div>
                    </div>
                    
                  ) : (
                    <p></p>
                  )}
                  {currentUser.role === "v" &&
                  post.driver_id !== null &&
                  currentUser.user_id !== post.driver_id ? (
                    <p class="card-text already-requested">
                      A driver has already accepted this request.
                    </p>
                  ) : (
                    <p></p>
                  )}
                  {currentUser.role === "v" &&
                  post.driver_id !== null &&
                  currentUser.user_id === post.driver_id &&
                  post.completed === null ? (
                    <p class="card-text already-requested-by-you">
                      You have accepted this request. Please go to My Deliveries
                      to update the status.
                    </p>
                  ) : (
                    <p></p>
                  )}
                  {currentUser.role === "v" &&
                  post.driver_id !== null &&
                  currentUser.user_id === post.driver_id &&
                  post.completed === 1 ? (
                    <p class="card-text already-requested-by-you">
                      This delivery is complete
                    </p>
                  ) : (
                    <p></p>
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
                to your account to proceed or <Link to="/signup">Sign Up</Link>
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
