import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    // Mulai tentant about
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      {/* Bungkusan Kontent */}
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me Sitting in laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          {/* Mulai frontend section */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>FrontEnd Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                deleniti ducimus non.
              </p>
            </div>
          </li>
          {/* Selesai frontend section */}
          {/* Mulai backend section */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>BackEnd Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                provident!
              </p>
            </div>
          </li>
          {/* Selesai backend section */}
          {/* Mulai UI designer section */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia, itaque!
              </p>
            </div>
          </li>
          {/* Selesai UI designer section */}
        </ul>
      </div>
      {/* Selesai bungkus */}
    </section>
    // Selesai
  );
};
