import React from "react";
import Collapsible from "react-collapsible";
import courses from "../components/data/allcourses.json";
import "../styles/allcourse.css";
import Footer from "./footer";
import { useTranslation } from 'react-i18next';

const CourseData = () => {
  const { t } = useTranslation();
  
  const Data = courses.map((data, key) => {
    return (
      <Collapsible
        key={key}
        trigger={data.title}
        className="collapse-main"
        transitionTime="100"
      >
        {data.cards.map((card, key) => {
          return (
            <div
              key={key}
              className="col-lg-4 featured-card"
              style={{ width: "100%" }}
            >
              <div className="card-icon-title">
                <div className="card-icon">
                  <i className={card.icon}></i>
                </div>
                <div className="card-title">
                  <b>{card.name}</b>
                </div>
              </div>
              <div className="card-price-button">
                <div className="card-price">{t('course.price')}: {t('course.free')}</div>
                <a className="card-button" href={card.link}>
                  {t('course.goToCourse')}
                </a>
              </div>
            </div>
          );
        })}
      </Collapsible>
    );
  });

  return Data;
};

export default function Allcourse() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="allcourse">
        <div className="featured-title">{t('main.allCourses')}</div>
        <div className="maxwidthcards">
          <CourseData />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}
