import React from "react";
import { Link } from "react-router-dom";
import { WorkItem } from "../components/WorkItem";
import "../styles/Works.css";

const Work = () => {
  return (
    <div className="portfolio_container text-white text-center work_list">
      <div className="work_title">My works</div>
      <div className="work_link">
        {WorkItem.map(({ title, img }) => (
          <Link className="text-decoration-none text-white work_link_box ">
            <div className="img_box">
              <img className="work_box_img" src={img} />
            </div>
            <h2 className="work_box_title">{title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
