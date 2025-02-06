import React from 'react';
import Salabel from '../../img/team (1).png';
import Raneem from '../../img/team (2).png';
import Mohammad from '../../img/team (3).png';
import Abd from '../../img/team (4).png';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import './team.css';

function Technical() {
  const { t } = useTranslation();

  const Member = {
    backgroundImage: `url(${[Mohammad, Raneem, Salabel, Abd].join(', ')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '200px',
    borderRadius: '50%',
    border: '3px solid #BDE4F4'
  };
  return (
    <div className="Mangement">
      <h2>{t('teachers')} </h2>
      <p style={{ width: '70%', margin: 'auto' }}>{t('teacherPara')}</p>

      <div className="container-mang">
        <div className="member">
          <img src={Salabel} alt="Member" style={Member} className="image-member" />
          <h4> Salsbel </h4>
          <h6>{t('teacher')}</h6>
          <a href="./Amro" style={{ borderBottom: '1px dotted red', fontSize: '14px' }}>
            {' '}
            More <IoArrowForwardOutline />{' '}
          </a>
        </div>

        <div className="member">
          <img src={Raneem} alt="Member" style={Member} className="image-member" />
          <h4> Raneem Al-Riyati </h4>
          <h6>{t('teacher')}</h6>
          <a href="./Hussien" style={{ borderBottom: '1px dotted red', fontSize: '14px' }}>
            {' '}
            More <IoArrowForwardOutline />{' '}
          </a>
        </div>
        <div className="member">
          <img src={Mohammad} alt="Member" style={Member} className="image-member" />
          <h4> Mohammad Ziadeh </h4>
          <h6>{t('teacher')}</h6>
          <a href="./Shahd" style={{ borderBottom: '1px dotted red', fontSize: '14px' }}>
            {' '}
            More <IoArrowForwardOutline />{' '}
          </a>
        </div>
        <div className="member">
          <img src={Abd} alt="Member" style={Member} className="image-member" />
          <h4> Abd Karkash </h4>
          <h6>{t('teacher')}</h6>
          <a href="./Laith" style={{ borderBottom: '1px dotted red', fontSize: '14px' }}>
            {' '}
            More <IoArrowForwardOutline />{' '}
          </a>
        </div>
      </div>
    </div>
  );
}
export default Technical;
