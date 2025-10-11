import React from "react";
import Featured from "./featured";
import AllCourse from "./allcourse";
import "../styles/main.css";

export default function main(props) {

  return (
    <div className="main margin-left-for-fixed">
      <div className="spacing">
        <Featured query={props.query} />
        <AllCourse query={props.query} collapsed={props.collapsed}/>
      </div>
    </div>
  );  
}
