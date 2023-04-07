import React from "react";

const ContactUs = () => {
  function handleEmailClick(event) {
    event.preventDefault();
    window.location.href = "mailto:nomorewaste.abf@gmail.com";
  }

  return (
    <div>
      <div class="body-content-create contact-spacing">
        <div class="inner-content-create contact-area">
          <div class="card-head-design create-header contact-header">
            <h4 class="card-heading" id="item_name" name="item_name">
              Contact Us
            </h4>
          </div>

          <p class="email-direction">
            To contact us, you can email us at: nomorewaste.abf@gmail.com
          </p>
          <div class="click-to-email">
            <p class="click-email">Or click</p>

            <button
              className="card-button create-btn submit-btn contact-btn"
              onClick={handleEmailClick}
            >
              Email Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
