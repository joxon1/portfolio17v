import React from "react";
import { Link } from "react-router-dom";
import MyInput from "../components/UI/input/MyInput";
import MyTextarea from "../components/UI/textarea/MyTextarea";
import "../styles/Contact.css";
import qr_code from "../assets/qrcode.png";
import MyButton from "../components/UI/buttons/MyButton";
import { INSTAGRAM, TELEGRAM, YOUTUBE } from "../utils/const";

function Contact() {
  return (
    <div className="portfolio_container text-white">
      <div className="contact_title text-center">Contact us</div>
      <div className="d-flex justify-content-around contact_container">
        <div className="input_container">
          <div className="input_media">
            <div className="d-flex justify-content-between">
              <MyInput placeholder="Name..." />
              <MyInput placeholder="Email..." />
            </div>
            <MyInput placeholder="Subject" type="message" />
            <MyTextarea placeholder="Message..." />
            <MyButton />
          </div>
          <div className="contact_number d-flex  justify-content-evenly align-items-center">
            <div className="contact_icons d-flex flex-column justify-content-evenly align-items-center ">
              <a
                href={INSTAGRAM}
                target="_blank"
                id="icons"
                class="bi bi-instagram"
              ></a>
              <a
                href={TELEGRAM}
                target="_blank"
                id="icons"
                class="bi bi-telegram"
              ></a>
              <a
                href={YOUTUBE}
                target="_blank"
                id="icons"
                class="bi bi-youtube"
              ></a>
            </div>
            <div className="contact_qr d-flex flex-column justify-content-center align-items-center">
              <h4>My number</h4>
              <img src={qr_code} alt="+998884754343" />
            </div>
          </div>
        </div>
        <div class="location_maps">
          <iframe
            className="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57123.66163672877!2d69.18874166529862!3d41.1957734572447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6141a3656f7b%3A0x6b1ca48097ac3f0d!2z0JnRg9C70LTQvtGILTE3LCDQotCw0YjQutC10L3Rgiwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1654021078390!5m2!1sru!2s"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
