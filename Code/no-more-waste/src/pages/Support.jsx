import React from 'react'

const Support = () => {
  return (
    <div>
      <div class="body-content-create">
        <div class="inner-content-create">
        <div className="sign-up create-div">
        <form className="signup-form">
          <h3 className="sign-up-heading create-heading support-heading">Contact Us</h3>

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
          

          <button className="card-button create-btn submit-btn">Submit</button>
        </form>
      </div>
        </div>
      
      </div>
      
    </div>
  )
}

export default Support