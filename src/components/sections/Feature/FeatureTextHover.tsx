import React from 'react';
import styles from './FeatureTextHover.module.css';

interface FeatureTextHoverProps {
    activeFeature: string | null;
}

const FeatureTextHover: React.FC<FeatureTextHoverProps> = ({ activeFeature }) => {
    const backgroundStyle = {
        backgroundColor: activeFeature ? 'rgba(255, 255, 255, 1)': 'transparent',
    };

    return (
        <div className={styles.text} style={backgroundStyle}>
            <div className={styles.rotatedText} style={ {opacity: activeFeature ? 0 : 1} } >
                HOVER ON <br />
                THE LIST
            </div>
          
        </div>
    );
};

export default FeatureTextHover;