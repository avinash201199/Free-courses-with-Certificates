import { Card, Title, BarChart, Subtitle } from "@tremor/react";
import useDashboard from "../hooks/useDashboard";
import courseData from "./data/allcourses.json";
import Footer from "./footer";

const dataFormatter = (number) => {
  return number.toString();
};

export default function Dashboard() {
  const dashBoardData = useDashboard(courseData);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen margin-left-for-fixed">
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
