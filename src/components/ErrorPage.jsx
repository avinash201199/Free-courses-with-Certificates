import React from "react";
import "../styles/errorpage.css";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="container flex-custom">
        <div className="four_zero_four_bg ">
          <h1 className="text-center ">{t('errorPage.title')}</h1>
        </div>
        <div className="contant_box_404 ">
          <h3 className="h2">{t('errorPage.message')}</h3>
          <Link to="/" className="link_404">
            {t('errorPage.backToHome')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
