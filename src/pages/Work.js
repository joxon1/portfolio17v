import React from "react";
import { Link } from "react-router-dom";
import { WorkItem } from "../components/WorkItem";
import "../styles/Works.css";

const Work = () => {
  return (
    <div className="portfolio_container text-white text-center">
      <div className="work_list">
        <div className="work_title">My works</div>
        {WorkItem.map(({ title, img }) => (
          <div className="work_link">
            <Link className="text-decoration-none text-white">
              <div className="work_link_box">
                <div className="img_box">
                  <img className="work_box_img" src={img} />
                </div>
                <h2 className="work_box_title">{title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
