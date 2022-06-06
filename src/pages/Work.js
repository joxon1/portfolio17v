import React from "react";
import { Link } from "react-router-dom";
import { WorkItem } from "../components/WorkItem";
import "../styles/Works.css";

const Work = () => {
  return (
    <div className="portfolio_container text-white text-center work_list">
      <div className="work_title">My works</div>
      {WorkItem.map(({ title, link, img }) => (
        <div className="text-decoration-none text-white work_link_box ">
          <img className="link_img" src={img} alt="image" />
          <div className="link_box">
            <h2 className="work_box_title">{title}</h2>
            <a href={link} target="_blank" className="work_box_img">
              {link}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
