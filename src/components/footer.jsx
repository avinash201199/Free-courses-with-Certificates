import React, { useState, useEffect } from "react";
import "../styles/footer.css";
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200); // button visible after scrolling 200px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

    <footer className="footer">
      <div className="footer-content">
        <p>
          {t('footer.proudlyMadeBy')}{" "}
          <a
            href="https://www.linkedin.com/in/avinash-singh-071b79175/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Avinash
          </a>
          ,{" "}
          <a
            href="https://twitter.com/v4nshhh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vansh
          </a>{" "}
          {t('footer.and')}{" "}
          <a
            href="https://github.com/avinash201199/Free-courses-with-Certificates/graphs/contributors"
            target="_blank"
            rel="noopener noreferrer"
          >
            community
          </a>{" "}
          🙂
        </p>

        <div className="footer-links">
          <a href="mailto:freecourseswithcerts@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="https://twitter.com/v4nshhh" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://github.com/avinash201199" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/avinash-singh-071b79175/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        </div>
   </footer>
      {isVisible && (
  <button 
    className="back-to-top" 
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    ↑ {t('common.backToTop')}
  </button>
 )}
    </>
  );
}

