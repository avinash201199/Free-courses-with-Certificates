import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 p-10">
      <h1 className="text-5xl font-extrabold text-white mb-10">About Us</h1>
      <div className="max-w-3xl text-center">
        <p className="text-2xl text-white mb-6">
          Welcome to this project! This initiative was started by{" "}
          <a
            className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 hover:text-blue-800 transition duration-300 text-3xl font-bold"
            href="https://github.com/avinash201199"
          >
            Avinash Singh
          </a>{" "}
          with invaluable contributions from the GitHub{" "}
          <a
            className="text-white hover:text-green-500 transition duration-300"
            href="https://github.com/avinash201199/Free-courses-with-Certificates/graphs/contributors"
          >
            community
          </a>{" "}
          {"<3"}.
        </p>
        <p className="text-2xl text-white mb-8 transition duration-300">
          Our mission is to provide free courses with certificates to help
          learners worldwide enhance their skills and knowledge. We believe in
          the power of open-source projects to make education accessible to
          everyone.
        </p>
        <p className="text-2xl text-white mb-8 transition duration-300">
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
        <p className="text-2xl text-white transition duration-300">
          If you have any questions or suggestions, please don't hesitate to
          reach out to{" "}
          <a href="https://www.linkedin.com/in/avinash-singh-071b79175/" className="text-fuchsia-300 hover:text-fuchsia-500">me</a>.
          Together, we can make a difference!
        </p>
      </div>
    </div>
  );
}

export default About;
