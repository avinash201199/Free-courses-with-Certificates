import React from "react";
import featuredData from "../components/data/featured.json";
import "../styles/featured.css";
import { useTranslation } from 'react-i18next';

const FeaturedCards = () => {
  const { t } = useTranslation();
  
  const Data = featuredData.map((data, key) => {
    return (
      <div className="col-lg-4 featured-card" key={key}>
        <div className="card-icon-title">
          <div className="card-icon">
            <i class={data.icon}></i>
          </div>
          <div className="card-title">
            <b>{data.name}</b>
          </div>
        </div>
        <div className="card-desc">{t('course.source')}: {data.source}</div>
        <div className="card-price-button">
          <div className="card-price">{t('course.price')}: {t('course.free')}</div>
          <a className="card-button" target="_blank" href={data.link}>
            {t('course.goToCourse')}
          </a>
        </div>
      </div>
    );
  });

  return Data;
};

export default function featured() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="featured pt-[100px]">
        <div className="featured-title featured-title-resp">
          {t('main.featuredCourses')}
        </div>
        <div className="featured-cards">
          <div className="container">
            <div className="row"><FeaturedCards /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
