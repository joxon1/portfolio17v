import React from "react";
import MyInput from "../components/UI/input/MyInput";
import MyTextarea from "../components/UI/textarea/MyTextarea";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="portfolio_container text-white">
      <div className="contact_title text-center">Contact us</div>
      <div className="d-flex justify-content-around contact_container">
        <div className="input_container">
          <div className="d-flex justify-content-between">
            <MyInput placeholder="Name..." />
            <MyInput placeholder="Email..." />
          </div>
          <MyInput placeholder="Subject" type="message" />
          <MyTextarea placeholder="Message..."  />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Contact;
