import React, { useState } from 'react';
import './rawan2.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Segmented } from 'antd';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const lngs = {
  en: { nativeName: 'EN' },
  ar: { nativeName: 'AR' },
  fr: { nativeName: 'FR' }
};

function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isRtl, setIsRtl] = useState(false);

  const goToAbout = () => navigate('/about');
  const goToHome = () => navigate('/home');
  const goToContact = () => navigate('/contact');
  const goToStudentProfile = () => navigate('/student-profile');

  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);

    if (value === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      setIsRtl(true);
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      setIsRtl(false);
    }
  };

  return (
    <nav className="navbar">
      <Segmented
        options={Object.keys(lngs).map((lng) => ({
          label: lngs[lng].nativeName,
          value: lng
        }))}
        value={i18n.language}
        onChange={handleLanguageChange}
        style={{
          background: '#e6e6e6100',
          border: '1px solid #423f8d',
          color: '#423f8d',
          fontWeight: 'bold',
          fontSize: '14px',
          height: '32px',
          minWidth: '140px',
          borderRadius: '10px',
          transition: 'all 0.3s ease',
          marginLeft: '10px'
        }}
        block
      />

      <h2
        style={{
          color: '#423f8d',
          fontFamily: 'Nunito',
          fontWeight: '700',
          marginLeft: '100px',
          marginRight: '100px'
        }}
      >
        <span style={{ color: '#ed128f', fontFamily: 'Nunito' }}>{t('S')}</span>
        {t('hining')} <span style={{ color: '#fbd010', fontFamily: 'Nunito' }}>{t('Ss')}</span>
        {t('tars')} <span style={{ color: '#12d9df', fontFamily: 'Nunito' }}>{t('A')}</span>
        {t('cademy')}
      </h2>

      <ul className="nav-links" style={{ fontFamily: 'Nunito', fontWeight: '800' }}>
        <li>
          <a className="navigation" style={{ fontFamily: 'Nunito', fontWeight: '800' }} onClick={goToHome}>
            {t('title5')}
          </a>
        </li>
        <li>
          <a className="navigation" style={{ fontFamily: 'Nunito', fontWeight: '800' }} onClick={goToAbout}>
            {t('title6')}
          </a>
        </li>
        <li>
          <a className="navigation" style={{ fontFamily: 'Nunito', fontWeight: '800' }} onClick={goToContact}>
            {t('title8')}
          </a>
        </li>
        <li>
          <a className="navigation" style={{ fontFamily: 'Nunito', fontWeight: '800' }} onClick={goToStudentProfile}>
            <i class="fa-regular fa-user"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
