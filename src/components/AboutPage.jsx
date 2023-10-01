import React from "react";

function About() {
  return (
    <div className="bg-primary margin-left-for-fixed h-screen d-flex justify-center content-center flex-wrap">
      <div className="text-center">
        <h1 className="display-4">About</h1>
        <p className="lead">
          This project was created by{" "}
          <a className="" href="https://github.com/avinash201199">
            Avinash Singh
          </a>{" "}
          with help from the Github community {"<3"}
        </p>
        <p>
          The public repositry for this project can be found{" "}
          <a
            className=""
            href="https://github.com/avinash201199/Free-courses-with-Certificates"
          >
            here
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
