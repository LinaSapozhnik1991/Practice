import React from "react";
import CardClient from "./CardClient";
import styles from "./ClientSaySection.module.css";
import Image from "next/image";
import arrowDown from "../../../assets/vectorArrow/arrowDown.png";
interface CardData {
  title: string;
  text: string;
  content: string;
}

const ClientSaySection: React.FC = () => {
  const cards: CardData[] = [
    {
      title: "SOPHIA NGUYEN",
      text: "Founder of Lumina Tech",
      content:
        "Schrift brought our brand to life with a design that perfectly captures our identity. Their bold approach and attention to detail exceeded our expectations!",
    },
    {
      title: "ISABELLE MARTINEZ",
      text: "Director at GreenSphere",
      content:
        "Working with Schrift was seamless and inspiring. Their creativity and dedication made our rebranding process a complete success.",
    },
    {
      title: "LIAM CARTER",
      text: "Co-founder of VentureStudio",
      content:
        "Schrift's designs are both innovative and purposeful. They helped us create a website that truly stands out and resonates with our audience.",
    },
    {
      title: "AMARA OKAFOR",
      text: "CEO of NovaEdge",
      content:
        "The Schrift team transformed our vision into a sleek and modern digital experience. The precision in their work is unmatched!",
    },
    {
      title: "PRIYA MEHTA",
      text: "COO of Elevate Systems",
      content:
        "Their commitment to excellence is inspiring. Schrift’s work was pivotal in helping us stand out in a competitive market.",
    },
    {
      title: "CARLOS RIVERA",
      text: "Founder of Arc & Co",
      content:
        "From start to finish, Schrift’s professionalism and creativity shined through. They’ve helped us establish a powerful and cohesive brand identity.",
    },
  ];

  return (
    <div className={styles.clientSay}>
      <h2 className={styles.card_title}>WHAT THEY SAY</h2>
      <p className={styles.card_sub_title}>
        Our clients are at the heart of everything we do. Hear from the
        visionaries, innovators, and leaders who’ve partnered with Schrift to
        bring bold ideas to life through precise, impactful design.
      </p>
      <div className={styles.card_list}>
        {cards.map((card, index) => (
          <CardClient
            key={index}
            title={card.title}
            text={card.text}
            content={card.content}
          />
        ))}
      </div>

      <div className={styles.seeMore}>
        <p>SEE MORE</p>
        <Image src={arrowDown} alt="arrow" className={styles.arrow} />
      </div>
    </div>
  );
};

export default ClientSaySection;
