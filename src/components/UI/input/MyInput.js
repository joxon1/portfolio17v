import React from 'react';
import classess from "./MyInput.module.css"

const MyInput = (props) => {
  return (
    <input className={classess.myInput} {...props}/>
  );
};

export default MyInput;