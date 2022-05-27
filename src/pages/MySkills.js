import React, { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";
import "../styles/MySkills.css";
import { SkillsItem } from "../components/SkillsItem";
import ProgressBar from "react-customizable-progressbar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CirclarProgress from "../components/ProgressBar";
const MySkills = () => {
  return (
    <div className="portfolio_container text-white">
      <div className="d-flex justify-content-between flex-column skills_container ">
        <div className="d-flex justify-content-center">
          <h1 className="skills_title">My Skills</h1>
        </div>
        <div>
          <div className="list">
            {SkillsItem.map(({ title, img, percentage,color }) => (
              <CirclarProgress
                size={250}
                strokeWidth={20}
                percentage={percentage}
                color={color}
                title={title}
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
