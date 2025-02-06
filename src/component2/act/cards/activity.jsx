import React from "react";
import styles from "../styles/Activity.module.css";
import PicSlider from "./picsSlider";


export default function activity() {
  return (
    <>
      <section className={styles.container}>
        <br />
        <br />
        <br />
        <div className={styles.cardsContainer}>
          <PicSlider />
        </div>
      </section>
    </>
  );
}
