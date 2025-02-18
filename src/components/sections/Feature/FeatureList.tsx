import React from "react";
import styles from "./FeatureList.module.css";
import Barcode from "../../ui/Barcode";

interface Feature {
  id: string;
  name: string;
}

interface FeatureListProps {
  features: Feature[];
  onFeatureHover: (id: string) => void;
  onFeatureLeave: () => void;
}

const FeatureList: React.FC<FeatureListProps> = ({
  features,
  onFeatureHover,
  onFeatureLeave,
}) => {
  return (
    <div className={styles.feature_list}>
      <ul>
        {features.map((feature, index) => (
          <li
            key={feature.id}
            className={index === 0 ? styles.list_li_one : styles.list_li}
            onMouseEnter={() => onFeatureHover(feature.id)}
            onMouseLeave={onFeatureLeave}
          >
            <div className={styles.featureItem}>
              <span className={styles.featureId}>{feature.id}</span>
              <span className={styles.featureName}>{feature.name}</span>
            </div>
            <Barcode />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;
