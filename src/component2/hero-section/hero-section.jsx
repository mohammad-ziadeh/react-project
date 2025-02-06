import React from 'react';
import './rawan1.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import pic from '../../img/kids.jpg';

function Hero() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const goToCreat = () => {
    navigate('/creat');
  };
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${pic})` }}>
      <div className="hero-content">
        <h1 className="hero-title" style={{ fontFamily: 'Nunito' }}>
          {t('title4')}
        </h1>
        <p className="hero-subtitle" style={{ fontFamily: 'Nunito' }}>
          {t('title9')}
        </p>
        <button onClick={goToCreat} className="hero-button" style={{ fontFamily: 'Nunito' }}>
          {t('title10')}
        </button>
        <div className="hero-image"></div>
      </div>
    </div>
  );
}

export default Hero;
