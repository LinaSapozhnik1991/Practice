import React from "react";
import styles from "./AboutSection.module.css";
import Barcode from "../../ui/Barcode";

interface CardProps {
  svgIcon: React.ReactNode;
  title: string;
  description: string;
}

const CardClient: React.FC<CardProps> = ({ svgIcon, title, description }) => {
  return (
    <div className={styles.cards}>
      <div className={styles.card_header}>{svgIcon}</div>
      <div className={styles.card_body}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.card_line}></div>
      <div className={styles.card_footer}>
        <Barcode />
      </div>
    </div>
  );
};

export default CardClient;
