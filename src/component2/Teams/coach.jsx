import React from "react";
import Rawan from "../../img/team (1).png";
import Abd from "../../img/team (3).png";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

import "./team.css";

function Coach() {
  const { t } = useTranslation();

  const Member = {
    backgroundImage: `url(${[Rawan, Abd].join(", ")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "200px",
    borderRadius: "50%",
    border: "3px solid #BDE4F4",
  };

  return (
    <div className="Mangement">
      <h2>{t("mangerSuper")}</h2>
      <p style={{ width: "70%", margin: "auto" }}>{t("mangerSuperPara")}</p>

      <div className="container-mang">
        <div className="member">
          <img
            src={Rawan}
            alt="Member"
            style={Member}
            className="image-member"
          />
          <h4> Rawan </h4>
          <h6>{t("techTrainer")} </h6>
          <a
            href="./Amro"
            style={{ borderBottom: "1px dotted red", fontSize: "14px" }}
          >
            {" "}
            More <IoArrowForwardOutline />{" "}
          </a>
        </div>

        <div className="member">
          <img src={Abd} alt="Member" style={Member} className="image-member" />
          <h4> Abd Karkash </h4>
          <h6>{t("techTrainer")}  </h6>
          <a
            href="./Ahmad"
            style={{ borderBottom: "1px dotted red", fontSize: "14px" }}
          >
            {" "}
            More <IoArrowForwardOutline />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
export default Coach;

// <div className='icons-person'><a href='./join'> <IoLogoFacebook  />  </a> <a href='./join'> <IoLogoInstagram   />  </a> <a href='./join'> <IoLogoLinkedin  />  </a> </div>
