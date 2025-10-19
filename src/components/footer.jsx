import React, { useState, useEffect } from "react";
import "../styles/footer.css";
export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200); // button visible after scrolling 200px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer>
      <div className="footer">
        Proudly made by{" "}
        <a href="https://www.linkedin.com/in/avinash-singh-071b79175/">
          Avinash{" "}
        </a>{" "}
        , <a href="https://twitter.com/v4nshhh">Vansh </a> and <a href="https://github.com/avinash201199/Free-courses-with-Certificates/graphs/contributors">community </a>{":)"}
        <br />
      </div>
      {isVisible && (
  <button 
    className="back-to-top" 
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    ↑ Back to Top
  </button>
)}
    </footer>
  );
}
