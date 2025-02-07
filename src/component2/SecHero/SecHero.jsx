import React from 'react';
import './SecHero.css';
import img from '../../img/kids cut .jpg';
function Picture({ Title }) {
  return (
    <div className="header-background" style={{ backgroundImage: `url(${img})` }}>
      <h1 class="title">{Title}</h1>
    </div>
  );
}

export default Picture;
