import React from 'react';
import './styles/Footer.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="footer" style={{ fontFamily: 'Nunito' }}>
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <h2 className="brand-name">
            <p style={{ fontFamily: 'Nunito' }}>
              <span style={{ color: '#ed128f',fontFamily: 'Nunito' }}>{t('S')}</span>
              {t('hining')} <span style={{ color: '#fbd010',fontFamily: 'Nunito' }}>{t('Ss')}</span>
              {t('tars')} <span style={{ color: '#12d9df',fontFamily: 'Nunito' }}>{t('A')}</span>
              {t('cademy')}
            </p>
          </h2>
          <p style={{ paddingInline: '20px', fontFamily: 'Nunito' }}>{t('footer-description')}</p>
          <div className="social-icons" style={{ display: 'flex', gap: '50px', fontFamily: 'Nunito' }}>
            <a href="https://x.com/?mx=2" style={{ color: 'pink',fontFamily: 'Nunito' }}>
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/?locale=ar_AR" style={{ color: 'pink',fontFamily: 'Nunito' }}>
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/" style={{ color: 'pink',fontFamily: 'Nunito' }}>
              <FaLinkedinIn />
            </a>
          </div>
          <p>{t('©')}</p>
        </div>
        <div className="footer-section footer-links">
          <ul>
            <li>
              <h2 style={{ fontSize: '24px',fontFamily: 'Nunito' }}>{t('Quick')} </h2>
            </li>
            <li>
              <a href="#"> {t('about')} </a>
            </li>
            <li>
              <a href="#"> {t('activity')}</a>
            </li>
            <li>
              <a href="#"> {t('contact')}</a>
            </li>
            <li>
              <a href="#"> {t('students')}</a>
            </li>
          </ul>
        </div>
        <div className="footer-section footer-links">
          <ul>
            <li>
              <h2 style={{ fontFamily: 'Nunito' }}> {t('partners')} </h2>
            </li>
            <li>
              <a href="https://simplonline.co/login?redirect=%2Fclassrooms%2Fd4c96491-06fe-48f7-a0f3-5deb29d01377%2Fworkspaces%3Ftopic%3D28fa6069-d398-4279-bfde-f0ed8734a4c2">
                {' '}
                {t('simplonline')}
              </a>
            </li>
            <li>
              <a href="https://yo.orange.jo/orange-coding-academy"> {t('orange')}</a>
            </li>
            <li>
              <a href="https://www.psut.edu.jo/ar"> {t('PSUT')}</a>
            </li>
            <li>
              <a href="https://www.modee.gov.jo/Default/Ar"> {t('MoDEE')}</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="footer-bottom">
        <p>
        {t("©")}
        </p>
      </div> */}
    </footer>
  );
}

export default Footer;
