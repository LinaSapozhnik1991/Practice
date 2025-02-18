"use client"; // Добавьте эту строку в начале файла

import React, { useState } from "react";
import styles from "./FeatureSection.module.css";
import FeatureList from "./FeatureList";
import FeatureTextHover from "./FeatureTextHover";

const FeaturedSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const features = [
    { id: "01", name: "CASPIAN FOREST" },
    { id: "02", name: "ALCHEMED" },
    { id: "03", name: "CAPSULE" },
    { id: "04", name: "SWOOSH!" },
  ];

  const handleMouseEnter = (id: string) => {
    setActiveFeature(id);
  };

  const handleMouseLeave = () => {
    setActiveFeature(null);
  };

  return (
    <div className={styles.feature} id="portfolio">
      <h2 className={styles.feature_title}>FEATURED PORTFOLIO</h2>
      <p className={styles.feature_text_content}>
        Explore how Schrift transforms bold ideas into impactful designs. From
        branding to digital experiences, our work reflects precision, clarity,
        and purpose.
      </p>

      <FeatureTextHover activeFeature={activeFeature} features={features} />
      <FeatureList
        features={features}
        onFeatureHover={handleMouseEnter}
        onFeatureLeave={handleMouseLeave}
      />
    </div>
  );
};

export default FeaturedSection;
