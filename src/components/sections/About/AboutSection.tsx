import React from "react";
import Image from "next/image";
import container from "../../../assets/about/About Image Container.png";
import styles from "./AboutSection.module.css";
import IconOne from "../../ui/iconSvg/IconOne";
import IconTwo from "../../ui/iconSvg/IconTwo";
import IconThree from "../../ui/iconSvg/IconThree";
import IconFoure from "../../ui/iconSvg/IconFoure";
import Cards from "./Cards";
const AboutSection: React.FC = () => {
  const cardData = [
    {
      svgIcon: <IconOne />,
      title: "PRECISION",
      description:
        "Every detail counts at Schrift. We believe in designing with intention, where every element serves a purpose.",
    },
    {
      svgIcon: <IconTwo />,
      title: "BOLD",
      description:
        "Our style is modern, sleek, and minimal, using clean lines and bold choices that make a statement.",
    },
    {
      svgIcon: <IconThree />,
      title: "CLIENT - CENTERED",
      description:
        "Your vision is our priority. We work closely with clients, valuing open communication and feedback at every step.",
    },
    {
      svgIcon: <IconFoure />,
      title: "CREATIVE EXCELLENCE",
      description:
        "Our team is composed of experienced designers who bring fresh, innovative perspectives to each project",
    },
  ];
  return (
    <div className={styles.about} id="about">
      <div className={styles.about_title}>
        <h2>
          about
          <br /> schrift
        </h2>
        <Image src={container} alt="image" />
      </div>
      <div className={styles.aboutContent}>
        <h4 className={styles.aboutContent_text}>
          Schrift is a graphic design agency focused on clarity, impact, and
          purpose. We deliver designs that communicate powerfully and
          authentically
        </h4>
        <div className={styles.aboutCardsWrapper}>
          {cardData.map((card, index) => (
            <Cards
              key={index}
              svgIcon={card.svgIcon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
