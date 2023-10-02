import React from "react";
import '../styles/errorpage.css'
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div class="error-page page-wrap d-flex flex-row align-items-center">
      <div class="container text-white">
        <div class="row justify-content-center">
          <div class="col-md-12 text-center">
            <span class="display-1 h1 d-block">404</span>
            <div class="mb-4 lead">
              The page you are looking for was not found.
            </div>
            <Link to='/' class="btn">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
