import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="portfolio_container text-white">
      <div className="contact_title text-center">Contact us</div>
      <div className="d-flex justify-content-around">
        <div className="contact_input">
          <div class="input-group mb-3">
            <div class="input-group-prepend"></div>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Contact;
