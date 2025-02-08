import React from 'react';
import Rawan from '../../img/team (1).png';
import Abd from '../../img/team (3).png';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

import './team.css';

function Coach() {
  const { t } = useTranslation();

  const Member = {
    backgroundImage: `url(${[Rawan, Abd].join(', ')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '200px',
    borderRadius: '50%',
    border: '3px solid #BDE4F4'
  };

  return (
    <div className="Mangement">
      <h2>{t('mangerSuper')}</h2>
      <p style={{ width: '70%', margin: 'auto' }}>{t('mangerSuperPara')}</p>

      <div className="container-mang">
        <div className="member">
          <img src={Rawan} alt="Member" style={Member} className="image-member" />
          <h4> Rawan </h4>
          <div className="arrow">
            <h6>{t('techTrainer')} </h6>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-lg" style={{ color: 'black', marginRight: '10px' }}></i>
            </a>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-lg" style={{ color: 'black' }}></i>
            </a>
          </div>
        </div>

        <div className="member">
          <img src={Abd} alt="Member" style={Member} className="image-member" />
          <h4> Abd Karkash </h4>
          <h6>{t('techTrainer')} </h6>
          <div className="arrow">
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-lg" style={{ color: 'black', marginRight: '10px' }}></i>
            </a>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-lg" style={{ color: 'black' }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Coach;

// <div className='icons-person'><a href='./join'> <IoLogoFacebook  />  </a> <a href='./join'> <IoLogoInstagram   />  </a> <a href='./join'> <IoLogoLinkedin  />  </a> </div>
