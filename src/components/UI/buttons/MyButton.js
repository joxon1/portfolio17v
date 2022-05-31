import React from "react";
import classess from "./MyButton.module.css";

const MyButton = (props) => {
  return (
    <button className={classess.myButton} {...props}>
      Send
    </button>
  );
};

export default MyButton;
