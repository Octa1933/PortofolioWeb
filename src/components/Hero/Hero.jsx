import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <sectionc className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ada</h1>
        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero impedit
          nemo porro ipsam commodi amet voluptatum itaque? Accusantium
          doloremque iusto repellendus ullam!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contanctBtn}>
          Contanct Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </sectionc>
  );
};
