import { Card, Title, BarChart, Subtitle } from "@tremor/react";
import useDashboard from "../hooks/useDashboard";
import courseData from "./data/allcourses.json";

const dataFormatter = (number) => {
  return number.toString();
};

export default function Dashboard() {
  const dashBoardData = useDashboard(courseData);
  console.log(dashBoardData);
  return (
    <>
      <Card className="margin-left-for-fixed w-10/12">
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
    </>
  );
}
