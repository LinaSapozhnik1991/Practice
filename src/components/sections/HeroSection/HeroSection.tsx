import React from "react";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import arrowDownHero from "../../../assets/vectorArrow/arrowDownHero .png";
import barcode from "../../../assets/barcode.png";

const HeroSection: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroHead}>
        <div className={styles.heroHead_est}>
          <p>EST 21.12.24</p>
          <small>
            A place where design philosophy blends innovation and clarity to
            create impactful solutions
          </small>
        </div>
        <Image src={barcode} alt="barcode" />
      </div>
      <h1 className={styles.heroTitle}>The Art of Bold Precision</h1>

      <div className={styles.heroFooter}>
        <p>Bold Visions. Precise Execution</p>
        <div className={styles.heroFooter_line}></div>
        <a href="#" className={styles.heroFooter_link}>
          DISCOVER OUR WORK
          <Image
            src={arrowDownHero}
            alt="arrow"
            className={styles.heroFooter_arrow}
          />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
