import React from "react";
import { Link } from "react-router-dom";
import { WorkItem } from "../components/WorkItem";
import "../styles/Works.css";

const Work = () => {
  return (
    <div className="portfolio_container text-white text-center work_list">
      <div className="work_title">My works</div>
      <div className="work_link">
        {WorkItem.map(({ title, link }) => (
          <div className="text-decoration-none text-white work_link_box ">
            <div className="img_box">
              <a href={link} target="_blank" className="work_box_img">
                {link}
              </a>
            </div>
            <h2 className="work_box_title">{title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
