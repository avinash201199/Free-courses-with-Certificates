import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-blue-600 h-screen">
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="bg-white shadow-xl rounded-lg p-10 max-w-2xl text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-6">About Us</h1>
        <p className="text-lg text-gray-800 mb-6">
          Welcome to this project! This initiative was started by{" "}
          <a
            className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:text-blue-800 transition duration-300 text-2xl font-bold"
            href="https://github.com/avinash201199"
          >
            Avinash Singh
          </a>{" "}
          with invaluable contributions from the GitHub{" "}
          <a href="https://github.com/avinash201199/Free-courses-with-Certificates/graphs/contributors">
            community
          </a>{" "}
          {"<3"}.
        </p>
        <p className="text-lg text-gray-800 mb-6">
          Our mission is to provide free courses with certificates to help
          learners worldwide enhance their skills and knowledge. We believe in
          the power of open-source projects to make education accessible to
          everyone.
        </p>
        <p className="text-lg text-gray-800 mb-6">
          This repository is open-source and available{" "}
          <a
            className="text-blue-600 hover:text-blue-800 transition duration-300"
            href="https://github.com/avinash201199/Free-courses-with-Certificates"
          >
            here
          </a>
          . Feel free to explore, contribute, and join us in our mission to make
          education accessible to everyone.
        </p>
        <p className="text-lg text-gray-800">
          If you have any questions or suggestions, please don't hesitate to
          reach out to{" "}
          <a href="https://www.linkedin.com/in/avinash-singh-071b79175/" className="text-fuchsia-600">me</a>.
          Together, we can make a difference!
        </p>
        <div className="mt-6">
          <Link to="/">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition duration-300">
              Back to Courses Page
            </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
