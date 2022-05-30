import React from 'react';
import classess from "./MyTextarea.module.css"

const MyTextarea = (props) => {
  return (
    <textarea className={classess.myTextarea} {...props}/>
  );
};

export default MyTextarea;