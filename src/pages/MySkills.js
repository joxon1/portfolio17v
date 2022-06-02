import React from "react";
import "../styles/MySkills.css";
import { SkillsItem } from "../components/SkillsItem";
import "react-circular-progressbar/dist/styles.css";
import CirclarProgress from "../components/ProgressBar";
const MySkills = () => {
  return (
    <div className="portfolio_container text-white text-center skills_container">
      <h1 className="skills_title ">My Skills</h1>
      <div className="list">
        {SkillsItem.map(({ title, img, percentage, color }) => (
          <div className="d-flex flex-column justify-content-start align-items-center text-center list_item">
            <div className="list_title">
              <h5>{title}</h5>
              <img width={50} style={{ padding: 2 }} src={img} alt={title} />
            </div>
            <div className="mt-2">
              <CirclarProgress
                size={146}
                strokeWidth={20}
                percentage={percentage}
                color={color}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
