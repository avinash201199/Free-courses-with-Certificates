import React from "react";
import "../styles/footer.css";

import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
// import {FiDelete} from "react-icons/fi"
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="">
            <span className="">Don't forget to follow us on</span>
          </div>

          <div className="flex justify-content-center justify-content-lg-between">
            <a href="https://twitter.com/v4nshhh" className="mr-8 text-reset">
              <FaXTwitter size={35} color="white"/>
            </a>
            <a href="https://www.linkedin.com/in/avinash-singh-071b79175/" className="me-4 text-reset">
              <FaLinkedin size={35} color="white"/>
            </a>
          </div>
        </section>
        <section className="footer-lower">
          <p className="pl-32 py-2">Made with ❤️ by Avinash & Vansh</p>
        </section>
      </div>
    </footer>
  );
}
