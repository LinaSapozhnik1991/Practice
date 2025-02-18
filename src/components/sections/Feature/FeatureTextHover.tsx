import React from "react";
import styles from "./FeatureTextHover.module.css";

interface FeatureTextHoverProps {
  activeFeature: string | null;
  features: { id: string; name: string }[];
}

const FeatureTextHover: React.FC<FeatureTextHoverProps> = ({
  activeFeature,
  features,
}) => {
  const activeFeatureName = features.find(
    (feature: { id: string | null }) => feature.id === activeFeature
  )?.name;

  const backgroundStyle = {
    backgroundColor: activeFeature ? "rgba(18, 18, 18, 0.5)" : "transparent",
  };

  return (
    <div className={styles.text} style={backgroundStyle}>
      <div className={styles.rotatedText}>
        {activeFeatureName ? (
          <span className={styles.activeHover}>{activeFeatureName}</span>
        ) : (
          <span className={styles.hoverOn}>
            HOVER ON <br />
            THE LIST
          </span>
        )}
      </div>
    </div>
  );
};

export default FeatureTextHover;
