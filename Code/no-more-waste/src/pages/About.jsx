import React from "react";
import bulbul from "../images/bulbul-arora.png";
import faizah from "../images/faizah-kolapo.png";
import arika from "../images/arika-pasha.png";

const About = () => {
  return (
    <div>
      <div class="about about-content-area">
        <div class="our-pictures">
          <div class="name-and-pic">
            <img class="ceos" src={arika} alt="arika" />
            <p class="arika">Arika Pasha</p>
          </div>
          <div class="name-and-pic">
            <img class="ceos" src={bulbul} alt="bulbul" />
            <p class="bulbul">Bulbul Arora</p>
          </div>
          <div class="name-and-pic">
            <img class="ceos" src={faizah} alt="faizah" />
            <p class="faizah">Faizah Kolapo</p>
          </div>
        </div>
        <div class="why">
          <h3>Why</h3>
          <p class="why-desc">
            Many businesses throw away their excess food waste at the end of
            their work day when it could have been donated to homeless
            individuals in our city. Businesses might not be aware that shelters
            are willing to accept their excess food, or they may not be willing
            to drop it off to shelters themselves.
          </p>
        </div>
        <div class="aim">
          <h3>Aim</h3>
          <p class="aim-desc">
            We want to prevent food waste, help the homeless population in
            Regina and fill a gap by providing businesses the opportunity to
            eliminate their food waste.
          </p>
        </div>
        <div class="how">
          <h3>How</h3>
          <p class="how-desc">
            By creating a web application that will allow restaurants to donate
            their excess food allowing shelters to request. Volunteer drivers
            will also be available to pick up the food and deliver it to the
            shelters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
