import React, { useState, useEffect } from "react";
import Coach from "../component2/Teams/coach";
import Technical from "../component2/Teams/technical";
import ScrollAnimation from "react-animate-on-scroll";
import Navbar from "../component2/navbar/navbar";
import "animate.css/animate.compat.css";
import Footer from "../component2/footers/Footer";
import Motion from "../component2/motion-scroll/studentsRoll";
import "../component2/Teams/team.css";
import SecHero from "../component2/SecHero/SecHero";
import { FloatButton } from "antd";
import { useTranslation } from "react-i18next";

export default function Team({ Title }) {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <SecHero Title={t("about_us")} />
    
      <ScrollAnimation animateIn="fadeIn">
        <Coach />
      </ScrollAnimation>
      <FloatButton.BackTop
        style={{
          backgroundColor: "#ed068c",
          color: "white",
          borderRadius: "50%",
          fontSize: "20px",
        }}
      />
      <ScrollAnimation animateIn="fadeIn">
        <Technical />
      </ScrollAnimation>
      <br />
      <br />
      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "600",
          lineHeight: "48px",
          letterSpacing: "0px",
          marginTop: "100px",
          color: "#DC552C ",
        }}
      >
        {t("student")}
      </h2>
      <br />
      <ScrollAnimation animateIn="fadeIn">
        <Motion />
      </ScrollAnimation>
      <Footer />
    </div>
  );
}
