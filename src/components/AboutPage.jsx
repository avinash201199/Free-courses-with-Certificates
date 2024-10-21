import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 margin-left-for-fixed">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-yellow-300 mb-[100px] hover:text-yellow-500 transition duration-300 top-0">
          About Us
        </h1>
        <p className="text-2xl text-green-300 mb-[100px] transition duration-300 text-center">
          Welcome to this project! This initiative was started by{" "}
          <a
            className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:text-blue-800 transition duration-300 text-3xl font-bold"
            href="https://github.com/avinash201199"
          >
            Avinash Singh
          </a>{" "}
          with invaluable contributions from the GitHub{" "}
          <a
            className="text-green-300 hover:text-green-500 transition duration-300"
            href="https://github.com/avinash201199/Free-courses-with-Certificates/graphs/contributors"
          >
            community
          </a>{" "}
          {"<3"}.
        </p>
        <p className="text-2xl text-green-300 mb-8 transition duration-300 text-center">
          Our mission is to provide free courses with certificates to help
          learners worldwide enhance their skills and knowledge. We believe in
          the power of open-source projects to make education accessible to
          everyone.
        </p>
        <p className="text-2xl text-green-300 mb-8 transition duration-300 text-center">
          This repository is open-source and available{" "}
          <a
            className="text-yellow-300 hover:text-yellow-500 transition duration-300"
            href="https://github.com/avinash201199/Free-courses-with-Certificates"
          >
            here
          </a>
          . Feel free to explore, contribute, and join us in our mission to make
          education accessible to everyone.
        </p>
        <p className="text-2xl text-green-300 transition duration-300 text-center">
          If you have any questions or suggestions, please don't hesitate to
          reach out to{" "}
          <a
            href="https://www.linkedin.com/in/avinash-singh-071b79175/"
            className="text-green-600 text-decoration-none hover:text-green-500"
          >
            me
          </a>
          . Together, we can make a difference!
        </p>
      </div>
    </div>
  );
}

export default About;
