import React from "react";
import { Card, Image } from "react-bootstrap";
import "../styles/MySkills.css";
import { SkillsItem } from "../components/SkillsItem";
import ProgressBar from "react-customizable-progressbar";

const MySkills = () => {
  return (
    <div className="portfolio_container text-white">
      <div className="d-flex justify-content-between flex-column skills_container ">
        <div className="d-flex justify-content-center">
          <h1 className="skills_title">My Skills</h1>
        </div>
        <div>
          <div className="list">
            {SkillsItem.map(({ title,color, progress }) => (
              
                <ProgressBar
                  radius={100}
                  progress={75}
                  strokeWidth={28}
                  strokeColor={color}
                  strokeLinecap="butt"
                  trackStrokeWidth={14}
                  trackStrokeLinecap="butt"
                  initialAnimation={true}
                  transition="1.5s ease 0.5s"
                  trackTransition="0s ease"
                />
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
