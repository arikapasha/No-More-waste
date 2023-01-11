import React from "react";
import '../styles.css';
import search_icon from "../images/search-icon.svg";
import line from "../images/line.png";
import filter from "../images/filter.png";
import logo from "../images/noMoreWasteLogo.svg";
import fb from "../images/fb.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import copyright from "../images/copyright.png";

const CreatePost = () => {
  return (
    <div>
      <header>
        <nav class="nav collapsible">
          <a class="nav__brand" href="homePageBusiness.html"
            ><img class="logo-class" src={logo} alt=""
          /></a>
          <svg class="icon icon--white nav__toggler">
            <use href="images/sprite.svg#menu"></use>
          </svg>
          <ul class="list nav__list collapsible__content">
            <li class="nav__item"><a href="#">Profile</a></li>
            <li class="nav__item"><a href="#">Track Requests</a></li>
            <li class="nav__item"><a href="#">Support</a></li>
          </ul>
        </nav>
      </header>
      <div className="sign-up create-div">
      <form className="signup-form">
        <h3 className="sign-up-heading create-heading">Create a new post</h3>
        <label for="restName" className="form-label form-label-create">
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
        <label for="description" className="form-label form-label-create">
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
        <span class="create-span">
          <div className="upload">
            <p className="upload-btn">+</p>
          </div>
          <p className="upload-instruct">Upload pictures</p>
        </span>

        <button className="card-button create-btn">Create</button>
      </form>
    </div>
    <div class="footer">
        <div class="grid-footer grid--1x3">
          <div class="footer-col-one">
            <h3>HELP & SUPPORT</h3>
            <p>About NOMOREWASTE</p>
            <p>Responsibility</p>
          </div>
          <div class="footer-col-one">
            <h3>SUPPORT</h3>
            <p>Contact us</p>
            <p>FAQs</p>
          </div>
          <div class="footer-col-one">
            <h3>FIND US ON</h3>
            <span class="footer-span"
              ><img class="footer-icon" src={fb} alt="" />
              <img class="footer-icon" src={instagram} alt="" />
              <img class="footer-icon" src={twitter} alt=""
            /></span>
            <h3>SIGN UP FOR NEWSLETTERS</h3>
            <span class="newsletter-span">
              <input
                type="text"
                class="newsletter-input"
                placeholder="Email address"
              />
              <button class="newsletter-button">SUBSCRIBE</button>
            </span>
          </div>
        </div>
        <div>
          <span>
            <img class="copyright-icon" src={copyright} alt="" />
            <p class="copyright-text">2022 NOMOREWASTE All Rights Reserved</p>
          </span>
        </div>
      </div>
    </div>
    
  );
};

export default CreatePost;
