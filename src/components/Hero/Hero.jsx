import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <sectionc className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Akmal</h1>
        <p className={styles.description}>
          I am currently pursuing my undergraduate degree in Information
          Technology, with a specialization in UI/UX Design and Web Development.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contanctBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/akmal_profile.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </sectionc>
  );
};
