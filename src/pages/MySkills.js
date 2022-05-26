import React from "react";
import { Card, Image } from "react-bootstrap";
import "../styles/MySkills.css";
import { SkillsItem } from "../components/SkillsItem";
import ProgressBar from "react-customizable-progressbar";
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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
              
              <CircularProgressbar
              percentage={progress}
              initialAnimation={"25%"}
              text={`${title}%`
              
            }
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
