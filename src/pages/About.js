import React from "react";
import "../styles/About.css";
import TypeWriterEffect from "react-typewriter-effect";
import logo from "../assets/logo.png";
const About = () => {
  return (
    <div className="portfolio_container d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-between align-items-center about_container">
        <div className="about_title">
          <h1>
            <TypeWriterEffect
              width="60%"
              startDelay={100}
              cursorColor="red"
              textStyle={{
                fontSize: "4rem",
                color: "white",
                textShadow: "0 0 20px white",
              }}
              multiTextLoop={true}
              multiText={[
                "Hi, ",
                "My name is Joxongir",
                "I'm Fronted Developer ",
              ]}
              multiTextDelay={1000}
              typeSpeed={100}
              deleteSpeed={100}
            />
          </h1>
        </div>
        <div className="box_container">
          <div className="box_1">
            <div className="box_2">
              <img className="box_img" src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
