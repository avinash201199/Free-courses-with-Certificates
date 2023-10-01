export default function useDashboard(courseData) {
  let coursesArray = courseData.map((eachCourse) => {
    return {
      name: eachCourse.title,
      "Number Of Courses": eachCourse.cards.length,
    };
  });
  return coursesArray;
}

const chartdata = [
  {
    name: "Amphibians",
    "Number of threatened species": 2488,
  },
  {
    name: "Birds",
    "Number of threatened species": 1445,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 743,
  },
];
