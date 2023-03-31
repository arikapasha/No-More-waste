import React from "react";
import { Link } from "react-router-dom";
import cr from "../images/copyright.png";
import tw from "../images/twitter.png";
import fb from "../images/fb.png";
import ig from "../images/instagram.png";

const footer = () => {
  function handleEmailClick(event) {
    event.preventDefault();
    window.location.href = "mailto:nomorewaste.abf@gmail.com";
  }

  return (
    <footer class="footer">
      <div class="footer-align grid-footer grid--1x2">
        <div class="footer-col-one">
          <h3>HELP & SUPPORT</h3>
          <Link to="/about">About NOMOREWASTE</Link>
        </div>
        <div class="footer-col-one">
          <h3>SUPPORT</h3>
          <a href="#" onClick={handleEmailClick}>
            Contact Us
          </a>
        </div>
      </div>
      <div>
        <span class="copyright-area">
          <img class="copyright-icon" src={cr} alt="" />
          <p class="copyright-text">2022 NOMOREWASTE All Rights Reserved</p>
        </span>
      </div>
    </footer>
  );
};

export default footer;
