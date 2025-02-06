import React from 'react';
import Rania from '../../img/team (2).png';
import { useTranslation } from 'react-i18next';
import { IoArrowForwardOutline } from 'react-icons/io5';

function Nutrotion({ name, tag }) {
  const { t } = useTranslation();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '150px', height: '200px', spaceY: '2px' }}>
      <div
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          border: '4px solid #BDE4F4',
          overflow: 'hidden'
        }}
      >
        <img src={Rania} alt="Member" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <h4 style={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Nunito' }}>{name}</h4>
      <h6 style={{ fontSize: '14px', color: '#4B5563', fontFamily: 'Nunito' }}>{tag}</h6>
    </div>
  );
}

export default Nutrotion;
