import React from "react";
import { useOutletContext } from "react-router-dom";
import Featured from "./featured";
import AllCourse from "./allcourse";
import "../styles/main.css";

export default function Main(props) {
  // read sidebar state from the layout's outlet context (same pattern as About)
  const { sidebarCollapsed } = useOutletContext() || {};

  // keep behavior consistent with About: only apply on large screens
  const paddingLeft =
    typeof window !== "undefined" && window.innerWidth >= 1024
      ? sidebarCollapsed
        ? 70
        : 220
      : undefined;

  return (
    <div
      className="main margin-left-for-fixed"
      style={{ paddingLeft, transition: "padding-left 0.3s" }}
    >
      <div className="spacing">
        <Featured query={props.query} />
        <AllCourse
          query={props.query}
          // pass collapsed state to inner component in case it needs to adjust UI
          collapsed={sidebarCollapsed}
        />
      </div>
    </div>
  );
}
