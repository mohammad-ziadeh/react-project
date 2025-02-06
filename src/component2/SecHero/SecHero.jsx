import React from "react";
import "./SecHero.css";

function Picture({ Title }) {
  return (
    <div className="header-background">
      <h1 class="title">{Title}</h1>
    </div>
  );
}

export default Picture;
