import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div class="body-content-create">
        <div class="inner-content-create">
          <div className="sign-up create-div">
            <form className="signup-form">
            <div class="card-head-design create-header contact-header">
                    <h4 class="card-heading" id="item_name" name="item_name">
                    Contact Us
                    </h4>
                    </div>

              <label for="description" className="form-label form-label-create">
                Name
              </label>
              <br />
              <input
                type="text"
                id="desc"
                name="description"
                className="form-input post-pickup"
                placeholder="John Doe"
              />
              <br />
              <label for="description" className="form-label form-label-create">
                Email address
              </label>
              <br />
              <input
                type="text"
                id="desc"
                name="description"
                className="form-input post-pickup"
                placeholder="Johndoe@abc.com"
              />
              <br />
              <label for="restName" className="form-label form-label-create">
                Message
              </label>
              <br />
              <input
                type="text"
                id="rest-name"
                name="restName"
                className="form-input create-desc"
                placeholder="..."
              />
              <br />

              <button className="card-button create-btn submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
