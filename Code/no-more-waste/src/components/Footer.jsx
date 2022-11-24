import React from 'react'

import tw from "../images/twitter.png"
import fb from "../images/fb.png"
import ig from "../images/instagram.png"



const footer = () => {
  return (

    <footer class="footer">
      <div class="grid grid--1x3">
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
            <img class="footer-icon" src={ig} alt="" />
            <img class="footer-icon" src={tw} alt=""
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
          <img class="copyright-icon" src="images/copyright.png" alt="" />
          <p class="copyright-text">2022 NOMOREWASTE All Rights Reserved</p>
        </span>
      </div>
    </footer>
  )
}

export default footer