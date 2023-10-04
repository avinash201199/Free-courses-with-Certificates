import React from "react";
import "../styles/errorpage.css";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <div className="container flex-custom">
        <div className="four_zero_four_bg ">
          <h1 className="text-center ">404</h1>
        </div>
        <div className="contant_box_404 ">
          <h3 className="h2">The page you are looking for was not found.</h3>
          <Link to="/" className="link_404">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
