import React from "react";
import { useOutletContext } from "react-router-dom";
import { Card, Title, BarChart, Subtitle } from "@tremor/react";
import useDashboard from "../hooks/useDashboard";
import courseData from "./data/allcourses.json";
import Footer from "./footer";

const dataFormatter = (number) => number.toString();

export default function Dashboard() {
  const { sidebarCollapsed } = useOutletContext() || {};
  const paddingLeft =
    typeof window !== "undefined" && window.innerWidth >= 1024
      ? sidebarCollapsed
        ? 70
        : 220
      : undefined;

  const dashBoardData = useDashboard(courseData);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ paddingLeft, transition: "padding-left 0.18s ease" }}
    >
      <span className="text-4xl font-bold text-orange-400 pt-4">Dashboard</span>
      <Card className="w-10/12 top-[100px]">
        <Title>Number of courses</Title>
        <Subtitle></Subtitle>
        <BarChart
          className="mt-6 w-mw-100"
          data={dashBoardData}
          index="name"
          categories={["Number Of Courses"]}
          colors={["blue"]}
          valueFormatter={dataFormatter}
          showAnimation={true}
          showXAxis={false}
        />
      </Card>
      <div className="mt-[300px]"><Footer /></div>
      
    </div>
  );
}
